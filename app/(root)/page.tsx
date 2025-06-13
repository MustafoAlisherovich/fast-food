import About from './_components/about'
import BookTable from './_components/book-table'
import Hero from './_components/hero'
import Menu from './_components/menu'
import Testimonial from './_components/testimonial'

const Page = () => {
	return (
		<>
			<Hero />
			<Menu />
			<About />
			<BookTable />
			<Testimonial />
		</>
	)
}

export default Page
