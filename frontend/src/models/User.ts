import { BasketNode } from './BasketNode'

export interface User {
	id?: string
	email: string
	password?: string
	firstName: string
	lastName: string
	accountCreatedDate?: string
	basket: BasketNode[]
}