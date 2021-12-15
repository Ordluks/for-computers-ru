interface ProductBase {
	id: string
	name: string
	description: string
	category: number
	price: number
	discount: number
	image: any
}

export interface Product extends ProductBase {
	image: Buffer
}

export interface ProductCreating extends ProductBase {
	image: string
}