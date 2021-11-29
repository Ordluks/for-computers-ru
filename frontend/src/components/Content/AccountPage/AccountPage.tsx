import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { User } from '../../../api/users'
import Page from '../shared/Page'
import scss from './AccountPage.module.scss'
import UserCard from './UserCard'


type AccountPageProps = {
	user: User | null
}

const AccountPage: React.FC<AccountPageProps> = ({ user }) => {
	const userInfo = (
		<div className={scss.userInfo}>
			<UserCard user={user} />
			<button className={classNames(scss.cardButton, 'defaultButton')}>
				<NavLink to='/card'>Корзина</NavLink>
			</button>
		</div>
	)

	const notAuth = (
		<p className={scss.notAuth}>
			Вы не вошли в аккаунт
		</p>
	)

	const content = user ? userInfo : notAuth

	return (
		<Page pageTitle='Личный кабинет'>
			<div className={scss.wrapper}>
				<h1>Ваш аккаунт</h1>
				{content}
			</div>
		</Page>
	)
}

export default AccountPage