import classNames from 'classnames/bind'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BasketNode } from '../../../../models/BasketNode'
import { ProductInBasket } from '../../../../models/Product'
import { subPercent, splitNumber } from '../../../../utils'
import NumInput from '../../shared/NumInput'
import scss from './BasketProductCard.module.scss'

const cx = classNames.bind(scss)


type BasketProductCardProps = {
	product: ProductInBasket,
	changeProductsCount: (product: BasketNode) => void
}

const BasketProductCard: React.FC<BasketProductCardProps> = ({ product, changeProductsCount }) => {
	const { product: { id, name, image, price, discount }, count: prodCount } = product
	const discountPrice = subPercent(price, discount)

	const [ count, setCount ] = useState(prodCount)

	const countChangeHandler = (value: number) => {
		setCount(value)
		changeProductsCount({id, count: value})
	}

	return (
		<div className={scss.wraper}>
			<NavLink to={`/product/${id}`}>
				<img src={image} alt={name} className={scss.image} />
				<span className={scss.name}>{name}</span>
			</NavLink>
			<div className={scss.unclickable}>
				<div className={scss.count}>
					<NumInput caption='Количество' value={count} changeValue={countChangeHandler} min={1} />
				</div>
				<span>Цена</span>
				<div className={scss.prices}>
					<span className={cx(scss.regularPrice, { notActual: price !== discountPrice })} >{splitNumber(price * count) + '₽'}</span>
					<span className={scss.discountPrice}>{discountPrice !== price ? splitNumber(discountPrice * count) + '₽' : null}</span>
				</div>
			</div>
		</div>
	)
}

export default BasketProductCard