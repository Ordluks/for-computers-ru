import React from 'react'
import scss from './RegisterPage.module.scss'
import Page from '../shared/Page'


const RegisterPage: React.FC = () => {
	return (
		<Page pageTitle='Регистрация'>
			<div className={scss.wrapper}>
				<h1>Регистрация</h1>
				<div className={scss.form}>

				</div>

				<button className='defaultButton'>Отправить</button>
			</div>
		</Page>
	)
}

export default RegisterPage