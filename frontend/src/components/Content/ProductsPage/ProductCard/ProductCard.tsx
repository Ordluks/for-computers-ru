import React from 'react'
import scss from 'ProductCard.module.scss'
import { Product } from '../../../../models/Product'


type ProductCardProps = {
	product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const { name, description } = product

	return (
		<div>
			<span>{name}</span>
			<p>{description}</p>
		</div>
	)
}

export default ProductCard