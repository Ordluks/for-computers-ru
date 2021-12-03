import React from 'react'
import { useParams } from 'react-router'
import { Product } from '../../../models/Product'
import Page from '../shared/Page'
import ProductCard from './ProductCard'
import scss from './ProductsPage.module.scss'


type ProductsPageProps = {
	categoryName: string
	products: Product[]
	doLoad: (category: string | undefined) => void
}

const ProductsPage: React.FC<ProductsPageProps> = ({ categoryName, products, doLoad }) => {
	const { category } = useParams<'category'>()

	doLoad(category)

	return (
		<Page pageTitle={categoryName} >
			<div className='wrapper'>
				<h1>{categoryName}</h1>
				<div>
					<ProductCard product={products[0]} />
					{
						products.map(value => {
							return <ProductCard product={value} />
						})
					}
				</div>
			</div>
		</Page>
	)
}

export default ProductsPage