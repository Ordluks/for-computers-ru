import { Category } from './Categories'

export interface Product {
	id: number
	name: string
	description: string
	category: Category
	price: number
	discount: number
	image: string
}

export interface ProductInBasket {
	product: Product
	count: number
}