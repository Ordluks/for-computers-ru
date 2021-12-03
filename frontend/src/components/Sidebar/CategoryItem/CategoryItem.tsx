import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import scss from './CategoryItem.module.scss'


type CategoryItemProps = {
	url: string,
	text: string
}

const CategoryItem: FC<CategoryItemProps> = ({ url, text }) => {
	return <li className={scss.wrapper} ><NavLink to={url}>{text}</NavLink></li>
}

export default CategoryItem