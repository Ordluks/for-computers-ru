import React from 'react'
import scss from './ProductCard.module.scss'
import { Product } from '../../../../models/Product'
import { subPercent, splitNumber } from '../../../../utils'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'

const cx = classNames.bind(scss)


type ProductCardProps = {
	product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const { id, name, price, discount, image } = product
	const url = `/product/${id}`
	const discountPrice = subPercent(price, discount)

	return (
		<div className={scss.wrapper}>
			<NavLink to={url} className={scss.link}>
				<img className={scss.image} src={image} alt={name} />
				<span className={scss.name} >{name}</span>
			</NavLink>
			<div className={scss.unclickable}>
				<div className={scss.prices}>
					<span className={cx(scss.regularPrice, {notActual: price !== discountPrice})} >{splitNumber(price) + '₽'}</span>
					<span className={scss.discountPrice}>{discountPrice !== price ? splitNumber(discountPrice) + '₽' : null}</span>
				</div>
			</div>
		</div>
	)
}

export default ProductCard