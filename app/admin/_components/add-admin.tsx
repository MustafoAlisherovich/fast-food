'use client'

import { createAdmin } from '@/actions/user.action'
import { AlertDialogHeader } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { registerSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader, UserRoundPlus } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

function AddAdmin() {
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
		}
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size={'icon'} className='rounded-full cursor-pointer'>
					<UserRoundPlus />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<AlertDialogHeader>
					<DialogTitle>Add Admin</DialogTitle>
					<Form {...form}>
						<form onSubmit={() => form.handleSubmit(onSubmit)}>
							<FormField
								control={form.control}
								name='username'
								render={({ field }) => (
									<FormItem className='space-y-2'>
										<FormControl>
											<Input
												placeholder='Username'
												{...field}
												disabled={isLoading}
												className='mt-4 mb-4'
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
										<FormControl>
											<Input
												placeholder='example@gmail.com'
												{...field}
												disabled={isLoading}
												className='mb-4'
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
										<FormControl>
											<Input
												placeholder='*****'
												{...field}
												disabled={isLoading}
												className='mb-4'
											/>
										</FormControl>
										<FormMessage className='text-xs text-red-500' />
									</FormItem>
								)}
							/>
							<Button type='submit' disabled={isLoading} className='w-full'>
								Submit {isLoading && <Loader className='animate-spin' />}
							</Button>
						</form>
					</Form>
				</AlertDialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default AddAdmin
