import { ChildProps } from '@/types'
import Footer from './components/footer'
import Navbar from './components/navbar'

const Layout = ({ children }: ChildProps) => {
	return (
		<main>
			<Navbar />
			{children}
			<Footer />
		</main>
	)
}

export default Layout
