import React from 'react'
import scss from './ProductsListPageBtn.module.scss'


type ProductsListPageBtnProps = {
	num: number
	pageSelector: (num: number) => void
}

const ProductsListPageBtn: React.FC<ProductsListPageBtnProps> = ({ num, pageSelector }) => {
	const handlerOnClick = () => {
		pageSelector(num)
	}

	return (
		<button className={scss.wrapper} onClick={handlerOnClick}>
			{num + 1}
		</button>
	)
}

export default ProductsListPageBtn