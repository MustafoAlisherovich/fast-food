import { z } from 'zod'

export const bookingSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Invalid email address'),
	phone: z.string().min(3, 'Phone number is required'),
	date: z.string().min(1, 'Date is required'),
})

export const registerSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
	username: z.string().min(1, 'Username is required'),
})

export const loginSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
})
