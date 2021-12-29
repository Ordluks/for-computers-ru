import React from 'react'
import scss from './MainPage.module.scss'
import Page from '../shared/Page'
import banner from './banner.jpg'


const MainPage: React.FC = () => {
	return (
		<Page pageTitle='Главная' >
			<div className={scss.wrapper}>
				<div className={scss.bannerOuter}>
					<img className={scss.banner} src={banner} alt='banner' />
				</div>
			</div>
		</Page>
	)
}

export default MainPage