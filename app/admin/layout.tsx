import { ChildProps } from '@/types'
import Navbar from './_components/navbar'
const Layout = ({ children }: ChildProps) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	)
}

export default Layout
