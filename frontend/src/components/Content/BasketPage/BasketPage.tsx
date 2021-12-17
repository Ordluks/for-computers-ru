import React, { useEffect } from 'react'
import { ProductInBasket } from '../../../models/Product'
import Page from '../shared/Page'


type BasketPageProps = {
	products: ProductInBasket[]
	isLogin: boolean
	doLoad: () => void
}

const BasketPage: React.FC<BasketPageProps> = ({ products, isLogin, doLoad }) => {
	useEffect(() => {
		console.log('reload')
		doLoad()
		
	}, [products])

	return (
		<Page pageTitle='Корзина'>
			<div>
				{
					products.map((value) => {
						return <span>{value.product.name}</span>
					})
				}
			</div>
		</Page>
	)
}

export default BasketPage