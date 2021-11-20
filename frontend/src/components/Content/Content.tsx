import React from 'react'
import { Route, Routes } from 'react-router'
import scss from './Content.module.scss'
import LoginPage from './LoginPage'
import MainPage from './MainPage'
import ProductsPage from './ProductsPage'
import RegisterPage from './RegisterPage'


const Content: React.FC = () => {
	return (
		<div className={scss.wrapper}>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/products/:category' element={<ProductsPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</div>
	)
}

export default Content