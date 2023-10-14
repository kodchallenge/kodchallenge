import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthErrors } from "./error-code";
import { prisma } from '@kod/prisma'
import { hashPassword, verifyPassword } from '@kod/lib/auth'

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                usernameOrEmail: { label: "Username or email", type: "text", placeholder: "example@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) {
                    console.error("No credentials provided");
                    throw new Error(AuthErrors.NO_CREDENTIALS_PROVIDED);
                }

                const { usernameOrEmail, password } = credentials;

                const user = await prisma.users.findFirst({
                    where: {
                        OR: [
                            { username: usernameOrEmail, },
                            { email: usernameOrEmail }
                        ],
                    },
                    select: {
                        id: true,
                        email: true,
                        avatar: true,
                        password: true,
                        username: true,
                    }
                })
                if (!user) {
                    console.error("No user found.",);
                    throw new Error(AuthErrors.INVALID_USERNAME_PASSWORD);
                }

                if (await verifyPassword(password, user.password)) {
                    console.error("Invalid password");
                    throw new Error(AuthErrors.INVALID_USERNAME_PASSWORD);
                }

                return {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    avatar: user.avatar,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },

        async session({ session, token }) {
            session.user = token as any;
            return session;
        },
    },
    pages: {
        signIn: "/auth/login",
        signOut: "/auth/logout",
        error: "/auth/error",
    }
};