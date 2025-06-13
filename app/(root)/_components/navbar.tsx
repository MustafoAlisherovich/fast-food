'use client'

import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Navbar = () => {
	const [sticky, setSticky] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setSticky(true)
			} else {
				setSticky(false)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<nav
			className={`'bg-transperent p-4 fixed w-full z-10 h-16' ${
				sticky ? 'bg-accent-foreground' : ''
			}`}
		>
			<div className='container mx-auto flex justify-between items-center'>
				<a
					href='#home'
					className='text-white text-4xl font-semibold font-nunito'
				>
					Kinza
				</a>
				<ul className='flex space-x-4 gap-4'>
					{navLinks.map(nav => (
						<li
							key={nav.route}
							className='text-white text-lg hover:text-primary transition duration-300 font-nunito font-semibold'
						>
							<a href={nav.route}>{nav.name}</a>
						</li>
					))}
				</ul>
				<div className='flex items-center space-x-2 gap-2'>
					<Button
						size={'icon'}
						variant={'ghost'}
						className='hover:bg-transparent'
					>
						<a href='tel:+998911554995' aria-label='+998911554995'>
							<span>
								<Image
									src={'/icons/mobile.png'}
									alt='Mobile'
									className='size-6'
									width={24}
									height={24}
								/>
							</span>
						</a>
					</Button>
					<Button
						size={'icon'}
						variant={'ghost'}
						className='hover:bg-transparent'
					>
						<a href='https://instagram.com'>
							<Image
								src={'/icons/instagram.png'}
								alt='Instagram'
								className='size-6'
								width={24}
								height={24}
							/>
						</a>
					</Button>
					<Button
						size={'icon'}
						variant={'ghost'}
						className='hover:bg-transparent'
					>
						<a href='https://telegram.org'>
							<Image
								src={'/icons/telegram.png'}
								alt='Telegram'
								className='size-6'
								width={24}
								height={24}
							/>
						</a>
					</Button>
					<Button
						size={'icon'}
						variant={'ghost'}
						className='hover:bg-transparent'
					>
						<a href='https://facebook.com'>
							<Image
								src={'/icons/facebook.png'}
								alt='Facebook'
								className='size-6'
								width={24}
								height={24}
							/>
						</a>
					</Button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
