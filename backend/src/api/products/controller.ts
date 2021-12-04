import { Request, Response } from 'express'
import ProductsDAO from './dao'


interface GetProductsQueryParams {
	start: number
	count: number
	category: number
}

export default class ProductsController {
	static async getProductsApi(req: Request<{}, {}, {}, GetProductsQueryParams>, res: Response) {
		const { start, count, category } = req.query
		const products = await ProductsDAO.getProducts(start, count, category)
		res.json(products)
	}
}