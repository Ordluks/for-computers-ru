import React from 'react'
import { User } from '../../../../models/User'
import InfoItem from './InfoItem'


type UserCardProps = {
	user: User | null
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
	const { firstName, lastName, email } = user || {}


	return (
		<div className="wrapper">
			<InfoItem caption='Имя' text={String(firstName)} />
			<InfoItem caption='Фамилия' text={String(lastName)} />
			<InfoItem caption='E-mail' text={String(email)} />
		</div>
	)
}

export default UserCard