import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import scss from './NavItem.module.scss'


type NavItemProps = {
	url: string,
	text: string
}

const NavItem: FC<NavItemProps> = ({ url, text }) => {
	return <li className={scss.wrapper} ><NavLink to={url}>{text}</NavLink></li>
}

export default NavItem