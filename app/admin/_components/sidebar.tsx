import { Button } from '@/components/ui/button'
import { adminNavLinks } from '@/constants'
import Link from 'next/link'

function Sidebar() {
	return (
		<aside className='h-screen w-64 border-r bg-muted p-4 flex flex-col justify-between'>
			<div>
				<div className='text-2xl font-bold text-center py-4'>Admin Panel</div>
				<nav className='space-y-1 mt-4'>
					{adminNavLinks.map(item => (
						<Link key={item.route} href={`/admin/${item.route}`}>
							<Button
								variant='ghost'
								className='w-full justify-start gap-3 text-muted-foreground hover:text-primary'
							>
								{item.name}
							</Button>
						</Link>
					))}
				</nav>
			</div>
			<div>
				<Link href='/'>
					<Button
						variant='ghost'
						className='w-full justify-start gap-3 text-muted-foreground hover:text-primary cursor-pointer'
					>
						Back to website
					</Button>
				</Link>
			</div>
		</aside>
	)
}

export default Sidebar
