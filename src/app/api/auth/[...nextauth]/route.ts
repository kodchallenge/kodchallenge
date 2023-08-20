import authService from "@/services/authService"
import NextAuth from "next-auth"
import type { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
  secret: "secret",
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        usernameOrEmail: { label: "Username or Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      // @ts-ignore
      async authorize(credentials, req) {
        try {
          if (typeof credentials === "undefined") throw new Error("Credentials not found")

          const user = await authService.signin(credentials.usernameOrEmail, credentials.password)

          if (!user?.id) throw new Error("Kullanıcı bulunamadı!")

          return { ...user }
        } catch (err: any) {
          throw new Error( JSON.stringify({ error: err.message, status: false }))
        }
      }
    })
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
  session: { strategy: "jwt" },
  pages: {
    signIn: '/login',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }