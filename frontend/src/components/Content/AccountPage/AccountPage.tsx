import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { User } from '../../../models/User'
import NotAuth from '../shared/NotAuth'
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
				<NavLink to='/basket'>
					<button className={classNames(scss.cardButton, 'defaultButton')}>
						Корзина
					</button>
				</NavLink>
		</div>
	)

	const content = user ? userInfo : <NotAuth />

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