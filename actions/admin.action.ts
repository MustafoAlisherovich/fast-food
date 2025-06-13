'use server'

import User from '@/database/user.model'
import { connectToDatabase } from '@/lib/mongoose'
import { ICreateAdmin, ILogin } from './types'
import bcrypt from 'bcrypt'

export const createAdmin = async (data: ICreateAdmin) => {
	try {
		await connectToDatabase()
		const { email, password, username } = data

		const isExist = await User.findOne({ email })
		if (isExist) {
			return { error: 'Admin already exists' }
		}

		const hashedPassword = await bcrypt.hash(password, 10)

		await User.create({
			email,
			password: hashedPassword,
			username,
		})

		return { message: 'Admin registered successfully' }
	} catch (error) {
		console.error('Register error:', error)
		if (error instanceof Error) {
			return { error: error.message }
		}
		return { error: 'Something went wrong!' }
	}
}

export const loginAdmin = async (data: ILogin) => {
	try {
		await connectToDatabase()
		const { email, password } = data
		const user = await User.findOne({ email })
		if (!user) {
			return { error: 'Admin not found!' }
		}
		const isValidPassword = await bcrypt.compare(password, user.password)
		if (!isValidPassword) {
			return { error: 'Password is incorrect' }
		}

		return { success: 'Login successfully' }
	} catch (error) {
		console.log(error)
		if (error instanceof Error) {
			return { error: error.message }
		}
		return { error: 'Something went wrong!' }
	}
}
