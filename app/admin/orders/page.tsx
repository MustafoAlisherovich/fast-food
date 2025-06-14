import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

function Page() {
	return (
		<div className='my-20'>
			<Table>
				<TableCaption>Recent Orders</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className='w-[100px]'>Name</TableHead>
						<TableHead>Phone number</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Persons</TableHead>
						<TableHead className='text-right'>Date</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className='font-medium'>John doe</TableCell>
						<TableCell>+11112321</TableCell>
						<TableCell>example@gmail.com</TableCell>
						<TableCell>4</TableCell>
						<TableCell className='text-right'>14.06.2025</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	)
}

export default Page
