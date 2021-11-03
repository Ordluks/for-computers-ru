import React from 'react'
import scss from './Sidebar.module.scss'
import categoriesData from '../../categories.json'
import NavItem from './NavItem'


const Sidebar = () => {
	return (
		<div className={scss.wrapper}>
			<h1>Категории товаров</h1>
			<nav>
				<ul className='categories'>
					{
						Object.entries(categoriesData).map((value, index) => {
							const [ category, { name } ] = value
							return <NavItem url={'/products/' + category} text={name} key={index} />
						})
					}
				</ul>
			</nav>
		</div>
	)
}

export default Sidebar