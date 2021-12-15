import { Request, Response } from 'express'
import { ProductCreating } from '../../models/Product'
import ProductsDAO from './dao'


interface GetProductsQueryParams {
	start: number
	count: number
	category: number
}

export default class ProductsController {
	static async getProductsApi(req: Request<{}, {}, {}, GetProductsQueryParams>, res: Response) {
		const { start, count } = req.query
		const category = req.query.category || null
		const products = await ProductsDAO.getProducts(start, count, category)
		res.json(products)
	}

	static async createProductApi(req: Request<{}, {}, ProductCreating>, res: Response) {
		const product = req.body
		await ProductsDAO.createProduct(product)
		res.sendStatus(200)
	}
}