import React, { useEffect } from 'react'
import { ProductInBasket } from '../../../models/Product'
import { Status } from '../../../models/Status'
import LoadingScreen from '../shared/LoadingScreen'
import NotAuth from '../shared/NotAuth'
import Page from '../shared/Page'
import BasketProductCard from './BasketProductCard'


type BasketPageProps = {
	products: ProductInBasket[]
	isLogin: boolean
	status: Status
	doLoad: () => void
}

const BasketPage: React.FC<BasketPageProps> = ({ products, isLogin, status, doLoad }) => {
	useEffect(() => {
		if (status === 'idle' && isLogin) doLoad()
	}, [status, isLogin, doLoad])

	const content = !isLogin ? <NotAuth />
	: status === 'loading'
		? <LoadingScreen />
		: products.map((value, index) => {
				return <BasketProductCard product={value} key={index} />
			})

	return (
		<Page pageTitle='Корзина'>
			<div>
				{content}
			</div>
		</Page>
	)
}

export default BasketPage