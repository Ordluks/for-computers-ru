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
		const allProductsCount = await ProductsDAO.getProductsCount(category)
		res.json({products, allProductsCount})
	}

	static async getProductByIdApi(req: Request<{id: number}>, res: Response) {
		const { id } = req.params
		const product = await ProductsDAO.getProductById(id)
		res.json(product)
	}

	static async createProductApi(req: Request<{}, {}, ProductCreating>, res: Response) {
		const product = req.body
		await ProductsDAO.createProduct(product)
		res.sendStatus(200)
	}
}