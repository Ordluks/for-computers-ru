import api from '.'
import { getCookieByName } from '../utils'
import { User } from '../models/User'


const url = '/users'

export default class UsersAPI {
	static async fetchUserById(id: string) {
		return (await api.get<User>(url + id)).data
	}

	static async createUser(userData: User) {
		return (await api.post<string | null>(url, userData)).data || null
	}

	static async login(email: string, password: string): Promise<string | null> {
		const res = (await api.post(url + '/login', {email, password})).data
		if (res.errorMsg) return res.errorMsg
		document.cookie = `autorization=${res.token}; secure; max-age=31536000`
		return null
	}

	static async auth() {
		const token = getCookieByName('autorization')
		if (token) {
			const user = (await api.get<User | null>(url + '/login', { headers: { 'authorization': token } })).data
			if (user === null) document.cookie = 'autorization=""; max-age=-1'
			return user
		}
		return null
	}
}