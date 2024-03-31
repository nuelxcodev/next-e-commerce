'use server'
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";


const { handlers, auth, signIn, signOut } = NextAuth({
    secret: "jhgftfyuhjpokuyitfgvhjkoiuytfghjkiuyt",
    pages: {
        signIn: '/login'
    },
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                console.log(credentials);
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
});

export default async function handler(req, res) {
    const { method } = req;

    if (method === 'GET' && handlers.GET) {
        return handlers.GET(req, res);
    } else if (method === 'POST' && handlers.POST) {
        return handlers.POST(req, res);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}

export { auth, signIn, signOut };

