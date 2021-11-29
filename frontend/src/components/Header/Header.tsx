import React from 'react'
import { NavLink } from 'react-router-dom'
import AccountInfo from './AccountInfo'
import scss from './Header.module.scss'


const Header: React.FC = () => {
	return (
		<div className={scss.wrapper}>
			<h1 className={scss.siteName}><NavLink to='/'>ForComputers.ru</NavLink></h1>
			<AccountInfo />
		</div>
	)
}

export default Header