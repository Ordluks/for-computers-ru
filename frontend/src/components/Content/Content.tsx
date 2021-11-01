import React from 'react'
import { Route, Switch } from 'react-router'
import MainPage from './MainPage'
import scss from './Content.module.scss'


const Content = () => {
	return (
		<div className={scss.wrapper}>
			<Switch>
				<Route path='/' exact component={MainPage} />
			</Switch>
		</div>
	)
}

export default Content