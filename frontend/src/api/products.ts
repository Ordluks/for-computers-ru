import api from '.'
import { Product } from '../models/Product'


const url = '/products'

export default class ProductsAPI {
	static async fetchProducts(start: number, count: number, category: number) {
		return (await api.get<Product[]>(`${url}?start=${start}&count=${count}&category=${category}`)).data
	}
}