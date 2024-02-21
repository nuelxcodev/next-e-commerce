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
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
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
            },
        }),


    ],
    callbacks: {
        async session({ session }) {
            return session
        },
        async signIn({ profile }) {
             const user = {id:1}

            try {
                if (!profile) {
                    return null
                }
                console.log(profile)
                return user
            } catch (error) {
                console.log(error)
            }

        }
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        sigin: "/",
        signout: "/",
    }


}

export default NextAuth(authOptions);
