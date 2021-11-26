import React from 'react'
import scss from './LoginPage.module.scss'
import Page from '../shared/Page'
import EmailInput from './inputs/EmailInput'
import PasswordInput from './inputs/PasswordInput'
import Success from '../shared/Success'


type LoginPageProps = {
	loginError: string
	isSuccess: boolean
	doLogin: () => void
}

const LoginPage: React.FC<LoginPageProps> = ({ loginError, isSuccess, doLogin }) => {
	const content = isSuccess ? <Success /> :
		(
			<div className={scss.wrapper}>
				<h1>Вход</h1>
				<div className={scss.form}>
					<div className={scss.inputs}>
						<EmailInput />
						<PasswordInput />
					</div>
					<p className={scss.errorMsg}>{loginError}</p>
					<button className='defaultButton' onClick={doLogin}>Войти</button>
				</div>
			</div>
		)

	return (
		<Page pageTitle='Вход' >
			{content}
		</Page>
	)
}

export default LoginPage