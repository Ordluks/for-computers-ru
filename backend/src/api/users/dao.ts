import { Database } from 'sqlite'
import { v4 as uuid } from 'uuid'
import passwordHash from 'password-hash'
import jwt from 'jsonwebtoken'
import { secretKey } from '../../config'
import errorMessages from '../../errors'
import { User } from '../../models/User'


let db: Database

const generateToken = (id: string) => {
	const payload = {
		id
	}
	return jwt.sign(payload, secretKey, {expiresIn: "1year"})
}

export default class UsersDAO {
	static async injectDB(database: Database) {
		if (db) {
			return
		}

		db = database
	}

	static async getUsers(): Promise<User[]> {
		return await db.all('SELECT id, email, firstName, lastName, accountCreatedDate, basket FROM users')
	}
	
	static async getUserById(id: string): Promise<User> {
		const sql = `
		SELECT id, email, firstName, lastName, accountCreatedDate, basket
		FROM users WHERE id = ?
		`
		return await db.get(sql, [id])
	}

	private static async checkUserExists(userData: User): Promise<boolean> {
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

	static async createUser(userData: User): Promise<string | null> {
		if (await this.checkUserExists(userData)) return errorMessages.registerError

		const sql = `INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?)`
		const { email, password, firstName, lastName, basket } = userData

		const id = uuid()
		const date = Date.now()

		const hashPassword = passwordHash.generate(password)

		db.run(sql, [id, email, hashPassword, firstName, lastName, date, basket])
		return null
	}

	static async autorisation(userData: User): Promise<{token: string} | {errorMsg: string}> {
		const { email, password } = userData
		const sql = `
		SELECT id, email, password
		FROM users WHERE email = ?
		`
		const findedUser: User = await db.get(sql, [email])

		if (!findedUser) {
			return {errorMsg: errorMessages.loginError}
		}

		const passwordVerified = passwordHash.verify(password, findedUser.password)
		if (!passwordVerified) {
			return {errorMsg: errorMessages.loginError}
		}

		const token = generateToken(findedUser.id)
		return { token }
	}

	static async addProductToBucket() {

	}
}