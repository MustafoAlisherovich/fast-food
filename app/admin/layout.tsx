import { ChildProps } from '@/types'
import Navbar from './_components/navbar'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Sidebar from './_components/sidebar'
const Layout = async ({ children }: ChildProps) => {
	const session = await getServerSession(authOptions)
	if (!session) redirect('/login')
	return (
		<>
			<Navbar />
			<div className='flex'>
				<Sidebar />
				<main className='flex-1 p-6'>{children}</main>
			</div>
		</>
	)
}

export default Layout
