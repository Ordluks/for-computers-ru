import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Product } from '../../../models/Product'
import LoadingScreen from '../shared/LoadingScreen'
import Page from '../shared/Page'
import ProductCard from './ProductCard'
import scss from './ProductsPage.module.scss'


type ProductsPageProps = {
	categoryName: string
	products: Product[]
	isLoading: boolean
	doLoad: (category: string | undefined) => void
	clearList: () => void
}

const ProductsPage: React.FC<ProductsPageProps> = ({ categoryName, products, isLoading, doLoad, clearList }) => {
	const { category } = useParams<'category'>()

	useEffect(() => {
		doLoad(category)
		return () => {
			clearList()
		}
	}, [category])

	const productsList = isLoading ? <LoadingScreen /> :
		<div>
			{
				products.map((value, index) => {
					return <ProductCard product={value} key={index} />
				})
			}
		</div>

	return (
		<Page pageTitle={categoryName} >
			<div className='wrapper'>
				<h1>{categoryName}</h1>
				{productsList}
			</div>
		</Page>
	)
}

export default ProductsPage