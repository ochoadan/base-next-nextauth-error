import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
export const { handlers, auth } = NextAuth({
    providers: [GitHub],
    callbacks: {
        async session({ session, user, token }) {
            session!.user!.id = user.id
            return session
        },
    }
})