'use client'

import UserBox from './user-box'
import Link from 'next/link'
import AddAdmin from './add-admin'

const Navbar = () => {
	return (
		<div className='fixed inset-0 z-50 flex h-[10vh] justify-between border-b bg-primary px-2 lg:px-4'>
			<Link href='/admin'>
				<h1 className='text-white text-4xl mt-4 font-nunito'>Kinza</h1>
			</Link>

			<div className='flex items-center gap-4'>
				<AddAdmin />
				<UserBox />
			</div>
		</div>
	)
}

export default Navbar
