import React from 'react'
import categoriesList from '../../../../../models/Categories'
import scss from './CategorySelect.module.scss'


type CategorySelectProps = {
	selected: number,
	doChangeCategory: (selectedVlaue: number) => void
}

const CategorySelect: React.FC<CategorySelectProps> = ({ selected, doChangeCategory }) => {
	const ref = React.createRef<HTMLSelectElement>()

	const changeHandler = () => {
		const selectedVlaue = ref.current?.selectedIndex
		if (!selectedVlaue) return
		doChangeCategory(selectedVlaue)
	}

	return (
		<div className={scss.wrapper}>
			<span>Категория</span>
			<select className='defaultInput'
				ref={ref}
				defaultValue={selected}
				onChange={changeHandler}
			>
				{
					categoriesList.getCategoriesList().map((value, index) => {
						const { id, name } = value[1]
						return <option value={id} key={index}>{name}</option>
					})
				}
			</select>
		</div>
	)
}

export default CategorySelect