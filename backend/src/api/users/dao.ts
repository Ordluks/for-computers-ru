import { Database } from 'sqlite'
import { v4 as uuid } from 'uuid'
import passwordHash from 'password-hash'
import errorMessages from '../../models/errors'
import { User, UserCreatingData, UserSendingData } from '../../models/User'

let db: Database

export default class UsersDAO {
	static async injectDB(database: Database) {
		if (db) {
			return
		}

		db = database
	}

	static async getUsers(): Promise<UserSendingData[]> {
		return await db.all('SELECT id, email, firstName, lastName, accountCreatedDate FROM users')
	}
	
	static async getUserById(id: string): Promise<UserSendingData> {
		const sql = `
		SELECT id, email, firstName, lastName, accountCreatedDate
		FROM users WHERE id = ?
		`
		return await db.get(sql, [id])
	}

	private static async checkUserExists(userData: UserCreatingData): Promise<boolean> {
		const sql = `
		SELECT * FROM users
			WHERE email = ?
		`
		const { email, password } = userData
		const findedUserByEmail = await db.get(sql, [email])

		if (findedUserByEmail) {
			return true
		}

		const allUsers: User[] = await db.all('SELECT password FROM users')
		const findedUserByPassword = allUsers.find(value => passwordHash.verify(password, value.password))
		
		if (findedUserByPassword) {
			return true
		}

		return false
	}

	static async createUser(userData: UserCreatingData) {
		if (await this.checkUserExists(userData)) return errorMessages.registerError

		const sql = `INSERT INTO users VALUES (?, ?, ?, ?, ?, ?)`
		const { email, password, firstName, lastName } = userData

		const id = uuid()
		const date = Date.now()

		const hashPassword = passwordHash.generate(password)

		db.run(sql, [id, email, hashPassword, firstName, lastName, date])
	}
}