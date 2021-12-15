import api from '.'
import { Product } from '../models/Product'


const url = '/products'

export default class ProductsAPI {
	static async fetchProducts(start: number, count: number, category: number) {
		const products = (await api.get<Product[]>(
			`${url}?start=${start}&count=${count}${category !== -1 ? `&category=${category}` : ''}`)).data
		return products.map(value => {
			return {
				...value,
				image: 'data:image/jpeg;base64,' + value.image
			}
		})
	}

	static async createProduct(product: Product) {
		const sendingProduct = {
			...product,
			category: product.category.id
		}
		await api.post(url, sendingProduct)
	}
}