import React, { FC } from 'react'
import { useParams } from 'react-router'
import Page from '../shared/Page'
import scss from './ProductsPage.module.scss'
import categoriesJson from '../../../categories.json'

const categoriesData: {[key: string]: {name: string}} = categoriesJson


type ProductsPageParams = {
	category?: string
}

const ProductsPage: FC = () => {
	const category = useParams<ProductsPageParams>().category || 'all'
	const categoryName = categoriesData[category].name

	return (
		<Page pageTitle={categoryName} >
			<div className="wrapper"></div>
		</Page>
	)
}

export default ProductsPage