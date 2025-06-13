'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { registerSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { toast } from 'sonner'
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'
import { Loader } from 'lucide-react'
import { createAdmin } from '@/actions/admin.action'
import { signIn } from 'next-auth/react'

function Page() {
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: '',
			password: '',
			username: '',
		},
	})

	async function onSubmit(values: z.infer<typeof registerSchema>) {
		setIsLoading(true)

		const res = await createAdmin(values)
		if (res.error) {
			toast.error(res.error)
			setIsLoading(false)
		} else {
			toast.success(res.message)
			form.reset()
			setIsLoading(false)
			signIn('credentials', { callbackUrl: '/admin' })
		}
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-secondary'>
			<Card className='w-1/2 p-4 container max-w-xl mt-24'>
				<h1 className='text-xl font-bold'>Login</h1>
				<p className='text-sm text-muted-foreground'>
					Please enter your email and password to login.
				</p>
				<Separator className='my-3' />
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<FormField
							control={form.control}
							name='username'
							render={({ field }) => (
								<FormItem className='space-y-2'>
									<Label>Parol</Label>
									<FormControl>
										<Input
											placeholder='Username'
											{...field}
											disabled={isLoading}
										/>
									</FormControl>
									<FormMessage className='text-xs text-red-500' />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem className='space-y-2'>
									<Label>Email</Label>
									<FormControl>
										<Input
											placeholder='example@gmail.com'
											{...field}
											disabled={isLoading}
										/>
									</FormControl>
									<FormMessage className='text-xs text-red-500' />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem className='space-y-2'>
									<Label>Parol</Label>
									<FormControl>
										<Input
											placeholder='*****'
											type='password'
											{...field}
											disabled={isLoading}
										/>
									</FormControl>
									<FormMessage className='text-xs text-red-500' />
								</FormItem>
							)}
						/>
						<Button type='submit' disabled={isLoading} className='w-full'>
							Yuborish {isLoading && <Loader className='animate-spin' />}
						</Button>
					</form>
				</Form>
			</Card>
		</div>
	)
}

export default Page
