import { BucketNode as BasketNode } from './BucketNode'

export interface User {
	id?: string
	email: string
	password?: string
	firstName: string
	lastName: string
	accountCratedDate?: string
	basket: BasketNode[]
}