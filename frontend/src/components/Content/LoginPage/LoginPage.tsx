import React from 'react'
import scss from './LoginPage.module.scss'
import Page from '../shared/Page'
import EmailInput from './inputs/EmailInput'
import PasswordInput from './inputs/PasswordInput'


const LoginPage: React.FC = () => {
	return (
		<Page pageTitle='Вход' >
			<div className={scss.wrapper}>
				<h1>Вход</h1>
				<div className={scss.form}>
					<div className={scss.inputs}>
						<EmailInput />
						<PasswordInput />
					</div>
					<button className='defaultButton'>Войти</button>
				</div>
			</div>
		</Page>
	)
}

export default LoginPage