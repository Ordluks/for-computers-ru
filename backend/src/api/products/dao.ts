import { Database } from 'sqlite'


let db: Database

export default class ProductsDAO {
	static async injectDB(database: Database) {
		if (db) {
			return
		}

		db = database
	}

	static async getProducts(start: number = 0, count: number = 30, category: number) {
		const sql = `
		SELECT * FROM products WHERE category = ? LIMIT ? OFFSET ? 
		`
		return await db.all(sql, [ category, count, start ])
	}
}