import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Product } from '../../../models/Product'
import LoadingScreen from '../shared/LoadingScreen'
import Page from '../shared/Page'
import ProductCard from './ProductCard'
import ProductsListPageBtn from './ProductsListPageBtn'
import scss from './ProductsPage.module.scss'


type ProductsPageProps = {
	categoryName: string
	products: Product[]
	pagesCount: number
	isLoading: boolean
	doLoad: (category: string | undefined) => void
	clearList: () => void
}

const ProductsPage: React.FC<ProductsPageProps> = ({ categoryName, products, pagesCount, isLoading, doLoad, clearList }) => {
	const { category } = useParams<'category'>()

	useEffect(() => {
		doLoad(category)
		return () => {
			clearList()
		}
	}, [category])

	const productsList = products.map((value, index) => {
		return <ProductCard product={value} key={index} />
	})

	const content = isLoading ? <LoadingScreen /> :
		<div className={scss.products}>
			{productsList}
		</div>

	const pages = Array(pagesCount).fill(null).map((_, index) => {
		return <ProductsListPageBtn num={index} key={index} />
	})

	return (
		<Page pageTitle={categoryName} >
			<div className={scss.wrapper}>
				<h1>{categoryName}</h1>
				{content}
				<div className={scss.pages}>
					{pages}
				</div>
			</div>
		</Page>
	)
}

export default ProductsPage