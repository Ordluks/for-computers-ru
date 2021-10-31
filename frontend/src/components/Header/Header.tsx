import React from 'react'
import { NavLink } from 'react-router-dom'
import scss from './Header.module.scss'


const Header = () => {
	return (
		<div className={scss.wrapper}>
			<h1 className={scss.siteName}><NavLink to='/'>ForComputers.ru</NavLink></h1>
			<div className={scss.account}>
				<NavLink to='/login'>Вход</NavLink>
				<NavLink to='/register'>Регистрация</NavLink>
			</div>
		</div>
	)
}

export default Header