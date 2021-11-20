import React from 'react'
import scss from './RegisterPage.module.scss'
import Page from '../shared/Page'
import FirstNameInput from './inputs/FirstNameInput'
import LastNameInput from './inputs/LastNameInput'
import EmailInput from './inputs/EmailInput'
import PasswordInput from './inputs/PasswordInput'


type RegisterPageProps = {
	registerError: string
	doCreateUser: () => void
}

const RegisterPage: React.FC<RegisterPageProps> = ({ registerError, doCreateUser }) => {
	return (
		<Page pageTitle='Регистрация'>
			<div className={scss.wrapper}>
				<h1>Регистрация</h1>
				<div className={scss.form}>
					<div className={scss.inputs}>
						<FirstNameInput />
						<LastNameInput />
						<EmailInput />
						<PasswordInput />
					</div>

					<p>{registerError}</p>
					<button className='defaultButton' onClick={doCreateUser}>Отправить</button>
				</div>
			</div>
		</Page>
	)
}

export default RegisterPage