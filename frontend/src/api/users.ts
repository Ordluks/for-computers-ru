import api from '.'
import { getCookieByName } from '../utils'


export interface User {
	id: string
	email: string
	firstName: string
	lastName: string
	accountCratedDate: string
}

export type UserCreatingData = Omit<User, 'id' | 'accountCratedDate'> & {password: string}

const UsersAPI = {
	root: '/users',

	async fetchUsers() {
		return (await api.get<User[]>(this.root)).data
	},

	async fetchUserById(id: string) {
		return (await api.get<User>(this.root + id)).data
	},

	async createUser(userData: UserCreatingData) {
		return (await api.post<string | null>(this.root, userData)).data || null
	},

	async login(email: string, password: string): Promise<string | null> {
		const res = (await api.post(this.root + '/login', {email, password})).data
		if (res.errorMsg) return res.errorMsg
		document.cookie = `autorization=${res.token}; secure; max-age=31536000`
		return null
	},

	async auth() {
		const token = getCookieByName('autorization')
		if (token) {
			const user = (await api.get<User | null>(this.root + '/login', { headers: { 'authorization': token } })).data
			if (user === null) document.cookie = 'autorization=""; max-age=-1'
			return user
		}
		return null
	}
}

export default UsersAPI