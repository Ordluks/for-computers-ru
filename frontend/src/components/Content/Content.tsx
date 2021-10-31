import React from 'react'
import { Route, Switch } from 'react-router'
import MainPage from './MainPage'


const Content = () => {
	return (
		<div className='content'>
			<Switch>
				<Route component={MainPage} />
			</Switch>
		</div>
	)
}

export default Content