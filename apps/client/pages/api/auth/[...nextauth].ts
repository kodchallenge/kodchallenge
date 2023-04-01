import api from "@/services/api";
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "Enter email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter Password",
                },
            },

            async authorize(credentials, req) {
                try {
                    
                    const { email, password } = credentials
                    const data = await api().post("/v1/auth/signin", {email, password})
                    if(data.status !== 200) {
                        return null
                    }
                    return data.data
                } catch(err) {
                    console.error(err)
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            // @ts-ignore
            session.user = token;
            return session;
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },
    },
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: '/auth/signin',
    }
}
export default NextAuth(authOptions)