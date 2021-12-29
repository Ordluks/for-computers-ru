import api from '.'
import { getCookieByName } from '../utils'
import { User } from '../models/User'
import { BasketNode } from '../models/BasketNode'


const url = '/users'

export default class UsersAPI {
	static async fetchUserById(id: string): Promise<User> {
		return (await api.get(`${url}/id/${id}`)).data
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

	static async auth(): Promise<string | void> {
		const token = getCookieByName('autorization')
		if (token) {
			const res = await api.get<string>(url + '/login', { headers: { 'authorization': token } })
			if (!res.data) {
				return
			}
			return res.data
		}
	}

	static async changeBasket(userId: string, basket: BasketNode[]) {
		console.log(basket)
		
		await api.post(`/basket/${userId}`, basket)
	}
}