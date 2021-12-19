import classNames from 'classnames/bind'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductInBasket } from '../../../../models/Product'
import { subPercent, splitNumber } from '../../../../utils'
import scss from './BasketProductCard.module.scss'

const cx = classNames.bind(scss)


type BasketProductCardProps = {
	product: ProductInBasket
}

const BasketProductCard: React.FC<BasketProductCardProps> = ({ product }) => {
	const { product: { id, name, image, price, discount }, count } = product
	const discountPrice = subPercent(price, discount)

	return (
		<div className={scss.wraper} >
			<NavLink to={`/product/${id}`}>
				<img src={image} alt={name} className={scss.image} />
				<span className={scss.name}>{name}</span>
			</NavLink>
			<div className={scss.unclickable}>
				<div className={scss.prices}>
					<span className={cx(scss.regularPrice, { notActual: price !== discountPrice })} >{splitNumber(price) + '₽'}</span>
					<span className={scss.discountPrice}>{discountPrice !== price ? splitNumber(discountPrice) + '₽' : null}</span>
				</div>
				<span className={scss.count}>{count} шт.</span>
			</div>
		</div>
	)
}

export default BasketProductCard