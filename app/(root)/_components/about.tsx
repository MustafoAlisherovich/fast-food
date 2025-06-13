import Image from 'next/image'

const About = () => {
	return (
		<section className='bg-accent-foreground py-16 px-6 md:px-20' id='about'>
			<div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10'>
				{/* Left Image */}
				<div className='w-full md:w-1/2 flex justify-center'>
					<Image
						src='/aboutBurger/burger.jpg'
						alt='Burger'
						className='md:w-[500px] object-contain'
						width={500}
						height={500}
					/>
				</div>

				{/* Right Text */}
				<div className='w-full md:w-1/2 text-white text-center md:text-left'>
					<h2 className='text-4xl font-bold font-cursive mb-6 font-nunito'>
						We Are Kinza
					</h2>
					<p className='mb-6 text-xl'>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don&apos;t look even slightly
						believable. If you are going to use a passage of Lorem Ipsum, you
						need to be sure there isn&apos;t anything embarrassing hidden in the
						middle of text.
					</p>
				</div>
			</div>
		</section>
	)
}

export default About
