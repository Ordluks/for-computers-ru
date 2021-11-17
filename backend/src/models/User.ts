export interface UserCreatingData {
	email: string,
	password: string,
	firstName: string,
	lastName: string
}

export interface UserSendingData {
	id: string,
	email: string,
	firstName: string,
	lastName: string,
	accountCratedDate: string
}

export interface User {
	id: string,
	email: string,
	password: string,
	firstName: string,
	lastName: string,
	accountCratedDate: string
}