import { Request, Response } from 'express'
import { UserCreatingData } from '../../models/User'
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
		const userData: UserCreatingData = req.body
		res.send(await UsersDAO.createUser(userData))
		const { firstName, email } = userData
		console.log(`Created user ${firstName} ${email}`)
	}
}