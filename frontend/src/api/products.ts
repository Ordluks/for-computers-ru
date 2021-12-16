import api from '.'
import { Product } from '../models/Product'


const url = '/products'


export interface FetchProductsResult {
	products: Product[]
	allProductsCount: number
}

export default class ProductsAPI {
	static async fetchProducts(start: number, count: number, category: number) {
		const { products, allProductsCount } = (await api.get<FetchProductsResult>(
			`${url}?start=${start}&count=${count}${category !== -1 ? `&category=${category}` : ''}`)).data

		return {products, allProductsCount}
	}

	static async fetchProductById(id: number) {
		return (await (api.get<Product>(`${url}/id/${id}`))).data
	}

	static async createProduct(product: Product) {
		const sendingProduct = {
			...product,
			category: product.category.id
		}
		await api.post(url, sendingProduct)
	}
}