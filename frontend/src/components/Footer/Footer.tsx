import React from 'react'
import scss from './Footer.module.scss'


const Footer: React.FC = () => {
	return (
		<div className={scss.wrapper}>
			<div className={scss.contactInfo} >
				<h2>Контактная информация</h2>
				<span>Тел: +7 917 616 07-15</span>
				<span>E-mail: forcomputersshop@gmail.com</span>
			</div>
			<span className={scss.copyright}>© 2021 ForComputers.ru</span>
		</div>
	)
}

export default Footer