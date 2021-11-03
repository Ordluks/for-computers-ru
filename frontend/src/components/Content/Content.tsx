import React from 'react'
import { Route, Switch } from 'react-router'
import scss from './Content.module.scss'
import MainPage from './MainPage'
import ProductsPage from './ProductsPage'


const Content: React.FC = () => {
	return (
		<div className={scss.wrapper}>
			<Switch>
				<Route path='/' exact component={MainPage} />
				<Route path='/products/:category' component={ProductsPage} />
				<Route path='/products/' component={ProductsPage} />
			</Switch>
		</div>
	)
}

export default Content