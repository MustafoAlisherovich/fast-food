// lib/auth.ts
import CredentialsProvider from 'next-auth/providers/credentials'
import type { NextAuthOptions } from 'next-auth'
import { connectToDatabase } from '@/lib/mongoose'
import bcrypt from 'bcrypt'
import User from '@/database/user.model'

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) return null

				await connectToDatabase()
				const user = await User.findOne({ email: credentials.email })

				if (!user) return null

				const isPasswordCorrect = await bcrypt.compare(
					credentials.password,
					user.password
				)
				if (!isPasswordCorrect) return null

				return {
					id: user._id.toString(),
					email: user.email,
					name: user.username,
				}
			},
		}),
	],
	pages: {
		signIn: '/login',
	},
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) token.user = user
			return token
		},
		async session({ session, token }) {
			session.user = token.user as typeof session.user
			return session
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
}
