// Make sure to install next-auth: npm install next-auth
import NextAuth, { NextAuthOptions, Session, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { JWT } from 'next-auth/jwt'
import { BASE_URL } from '@/src/shared/utils/ky'

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
                role: { label: 'Role', type: 'text' },
            },
            async authorize(
                credentials: Record<string, string> | undefined
            ): Promise<User | null> {
                if (!credentials) return null
                try {
                    const user = await BASE_URL.post('login', {
                        json: {
                            email: credentials.email,
                            password: credentials.password,
                            isHashed: true,
                            // role: credentials.role,
                        },
                    }).json()
                    if (user) {
                        return user as unknown as User
                    }
                    return null
                } catch (error) {
                    console.log({ error })
                    return null
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user }: { token: JWT; user?: User }) {
            if (user) {
                token.user = user
            }
            return token
        },
        async session({ session, token }: { session: Session; token: JWT }) {
            session.user = token.user as User
            return session
        },
    },
    pages: {
        signIn: '/login',
    },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
