import { Category } from './Categories'

export interface Product {
	id?: string
	name: string
	description: string
	category: Category
	price: number
	discount: number
	image: string
}