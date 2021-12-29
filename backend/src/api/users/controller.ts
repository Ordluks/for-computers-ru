import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { secretKey } from '../../config'
import { BasketNode } from '../../models/Product'
import { User } from '../../models/User'
import UsersDAO from './dao'


export default class UsersController {
	static async getUsersApi(_req: Request, res: Response) {
		const result = await UsersDAO.getUsers()
		res.json(result)
	}

	static async getUserByIdApi(req: Request, res: Response) {
		const { id } = req.params
		const result = await UsersDAO.getUserById(id)

		try {
			res.json({
				...result,
				basket: JSON.parse(result.basket)
			})
		} catch (error) {
			res.sendStatus(500)
		}
	}

	static async createUserApi(req: Request, res: Response) {
		const userData: User = req.body
		const error = await UsersDAO.createUser(userData)
		res.send(error)
		if (!error) {
			const { firstName, email } = userData
			console.log(`Created user ${firstName} ${email}`)
		}
	}

	static async login (req: Request, res: Response) {
		const userData: User = req.body
		const result = await UsersDAO.autorisation(userData)
		res.json(result)

		const { email } = userData
		console.log(`Logining user ${email}`)
	}

	static async auth(req: Request, res: Response) {
		const token = req.headers.authorization
		let id: string | null = null
		if (token) {
			try {
				const decoded = jwt.verify(token, secretKey)
				id = (await UsersDAO.getUserById((decoded as any).id)).id
			} catch (error) {

			}
		}

		res.send(id)
	}

	static async setBasketApi(req: Request<{id: string}>, res: Response) {
		const basket = req.body
		const userId = req.params.id
		await UsersDAO.setBasket(userId, basket)
		res.sendStatus(200)
	}
}