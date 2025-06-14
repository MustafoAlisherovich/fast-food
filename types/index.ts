import { ReactNode } from 'react'

export interface ChildProps {
	children: ReactNode
}

export interface IAdmin {
	email: string
	_id: string
	username: string
	isDeleted: boolean
	password: string
}
