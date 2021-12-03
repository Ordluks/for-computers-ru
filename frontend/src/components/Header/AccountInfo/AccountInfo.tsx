import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { User } from '../../../models/User'
import scss from './AccountInfo.module.scss'


type AccountInfoProps = {
	user: User | null
}

const AccountInfo: React.FC<AccountInfoProps> = ({ user }) => {
	const noUser = (
		<div className={scss.noUsers}>
			<NavLink to='/login'>Вход</NavLink>
			<NavLink to='/register'>Регистрация</NavLink>
		</div>
	)

	const loginedUser = (
		<NavLink to='/account' className={scss.loginedUser}>
			<FontAwesomeIcon icon={faUser} className={scss.icon} />
			<span className={scss.name}>{user?.firstName}</span>
			<span className={scss.email}>{user?.email}</span>
		</NavLink>
	)

	const conntent = user ? loginedUser : noUser

	return (
		<div className={scss.wrapper}>
			{conntent}
		</div>
	)
}

export default AccountInfo