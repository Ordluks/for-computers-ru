import React from 'react'
import scss from './Sidebar.module.scss'
import CategoryItem from './CategoryItem'
import classNames from 'classnames'
import categoiesList from '../../models/Categories'


const Sidebar: React.FC = () => {
	return (
		<div className={scss.wrapper}>
			<div className={classNames(scss.inner, 'block')}>
				<ul className='categories'>
					{
						categoiesList.getCategoriesList().map((value, index) => {
							const [ textId, { name } ] = value
							return <CategoryItem url={'/products/' + textId} text={name} key={index} />
						})
					}
				</ul>
			</div>
		</div>
	)
}

export default Sidebar