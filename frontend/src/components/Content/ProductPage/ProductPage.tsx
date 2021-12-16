import React from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../../../models/Product'
import LoadingScreen from '../shared/LoadingScreen'
import Page from '../shared/Page'
import scss from './ProductPage.module.scss'


type ProductPageProps = {
	product: Product | null
	doLoad: (id: number) => void
}

const ProductPage: React.FC<ProductPageProps> = ({ product, doLoad }) => {
	const id: number = Number(useParams<'id'>().id)
	let content

	if (!product) {
		doLoad(id)
		content = <LoadingScreen />
	}

	const { name, image, description } = product || {}
	content = (
		<div className={scss.wrapper}>
			<div className={scss.info}>
				<h1 className={scss.name}>{name}</h1>
				<p className={scss.description}>{description}</p>
				<img src={image} alt={name} className={scss.image}/>
			</div>
			<button className='defaultButton'>В корзину</button>
		</div>)

	return (
		<Page pageTitle='Товар'>
			{content}
		</Page>
	)
}

export default ProductPage