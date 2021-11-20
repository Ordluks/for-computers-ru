import api from '.'


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
		return (await api.post<string | null>(this.root, userData)).data
	}
}

export default UsersAPI