import { Avatar } from '@/components/ui/avatar'

const Navbar = () => {
	return (
		<div className='fixed inset-0 z-50 flex h-[10vh] justify-between border-b bg-primary px-2 lg:px-4'>
			<h1 className='text-white text-4xl mt-4 font-nunito'>Kinza</h1>

			<div className='flex items-center gap-4'>
				<Avatar className='size-8 bg-white'></Avatar>
			</div>
		</div>
	)
}

export default Navbar
