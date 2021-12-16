import base64 from 'js-base64'
import { Database } from 'sqlite'
import { Product, ProductCreating } from '../../models/Product'


let db: Database

export default class ProductsDAO {
	static async injectDB(database: Database) {
		if (db) {
			return
		}

		db = database
	}

	static async getProducts(start: number = 0, count: number = 30, category: number) {
		const [ sql, params ] = category ? [
			'SELECT * FROM products WHERE category = ? LIMIT ? OFFSET ?',
			[category, count, start]
		] : [
			'SELECT * FROM products LIMIT ? OFFSET ?',
			[count, start]
		]
		const result = await db.all<Product[]>(sql, params)
		const products = result.map(value => processProductImage(value))

		return products
	}

	static async getProductsCount(category?: number) {
		const byCategory = category ? ` WHERE category = ${category}` : ''
		return (await db.get<{ 'COUNT(*)': number }>('SELECT COUNT(*) FROM products' + byCategory))['COUNT(*)']
	}

	static async getProductById(id: number) {
		const sql = 'SELECT * FROM products WHERE id = ?'
		return processProductImage(await db.get<Product>(sql, [id]))
	}

	static async createProduct(product: ProductCreating) {
		const id = this.getProductsCount()

		const { name, description, category, price, discount, image } = product

		const sql = `
		INSERT INTO products VALUES(?, ?, ?, ?, ?, ?, ?)
		`
		await db.run(sql, [id, name, description, category, price, discount, base64.decode(image)])
	}
}

const processProductImage = (product: Product) => ({
	...product,
	image: 'data:image/jpeg;base64,' + product.image.toString('base64')
})
