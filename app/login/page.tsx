'use client'

import { loginAdmin } from '@/actions/admin.action'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { loginSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

function Page() {
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	async function onSubmit(values: z.infer<typeof loginSchema>) {
		setIsLoading(true)
		const res = await loginAdmin(values)
		if (res.error) {
			return toast.error(res.error)
			setIsLoading(false)
		} else {
			toast.success(res.success)
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
