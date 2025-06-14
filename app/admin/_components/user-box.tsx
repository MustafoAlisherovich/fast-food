'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { signOut, useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export default function UserBox() {
	const { data: session } = useSession()

	if (!session) return null

	const user = session.user

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					className='p-0 h-8 w-8 rounded-full cursor-pointer'
				>
					<Avatar>
						<AvatarImage src={user?.image ?? ''} alt={user?.name ?? ''} />
						<AvatarFallback>
							{user?.name?.charAt(0).toUpperCase() ?? 'U'}
						</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56 mt-2'>
				<DropdownMenuLabel>
					<div className='text-sm font-medium'>{user?.name}</div>
					<div className='text-xs text-muted-foreground'>{user?.email}</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />

				<DropdownMenuItem onClick={() => signOut({ callbackUrl: '/' })}>
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
