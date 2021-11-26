import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { secretKey } from '../../config'
import { User } from '../../models/User'
import UsersDAO from './dao'


const toJSON = (obj: any) => JSON.stringify(obj, null, 2)

export default class UsersController {
	static async getUsersApi(_req: Request, res: Response) {
		const result = await UsersDAO.getUsers()
		res.send(toJSON(result))
		console.log('Get all users')
	}

	static async getUserByIdApi(req: Request, res: Response) {
		const { id } = req.params
		const result = await UsersDAO.getUserById(id)
		res.send(toJSON(result))
		console.log(`Get user whith id = ${id}`)
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
		let user: User | null = null
		if (token) {
			try {
				const decoded = jwt.verify(token, secretKey)
				user = await UsersDAO.getUserById((decoded as any).id)
			} catch (error) {
				
			}
		}

		res.send(user)
	}
}