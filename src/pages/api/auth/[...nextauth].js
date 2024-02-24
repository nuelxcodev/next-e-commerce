/* eslint-disable no-unused-vars */
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbconnection } from "../../../../lib/DatabaseConnect";
import User from "../../../models/user";
import bcrypt from "bcrypt"
import GoogleProvider from "next-auth/providers/google";
import { NextResponse } from "next/server";


export const authOptions = {
    providers: [

        CredentialsProvider({
            name: 'credentials',
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials
                try {
                    await dbconnection()
                    const user = await User.findOne({ email })
                    if (!user) return null
                    const matchpassword = bcrypt.compareSync(password, user.password)
                    if (!matchpassword) return null
                    return user
                } catch (error) {
                    console.log(error)
                }
            }

        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    session: {
        strategy: "jwt",
    },

    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === "google") {
                const { name, email } = user
                try {
                    await dbconnection()
                    const user = await User.findOne({ email })
                    if (user) {
                        return user
                    }
                    const newAccount = await new User({
                        name: name,
                        email: email
                    })
                    const res = await newAccount.save()
                    return user

                } catch (error) {
                    console.log(error)
                }
            }
        },
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email; // Add the user id to the token
                token.name = user.name; // Add the user name to the token
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.email = token.email;
                session.user.name = token.name;

            }
            console.log(session) // Add the user id to the session
            return session;
        },
        secret: process.env.NEXTAUTH_SECRET,
        pages: {
            sigin: "/login",
            signup: '/register',

        }

    }



}

export default NextAuth(authOptions);
