import React from 'react'
import scss from './RegisterPage.module.scss'
import Page from '../shared/Page'
import FirstNameInput from './inputs/FirstNameInput'
import LastNameInput from './inputs/LastNameInput'
import EmailInput from './inputs/EmailInput'
import PasswordInput from './inputs/PasswordInput'
import Success from '../shared/Success'


type RegisterPageProps = {
	registerError: string
	isSuccess: boolean
	doCreateUser: () => void
}

const RegisterPage: React.FC<RegisterPageProps> = ({ registerError, isSuccess, doCreateUser }) => {
	const content = isSuccess ? <Success /> :
		(
			<div className={scss.wrapper}>
				<h1>Регистрация</h1>
				<div className={scss.form}>
					<div className={scss.inputs}>
						<FirstNameInput />
						<LastNameInput />
						<EmailInput />
						<PasswordInput />
					</div>

					<p className={scss.errorMsg}>{registerError}</p>
					<button className='defaultButton' onClick={doCreateUser}>Отправить</button>
				</div>
			</div>
		)

		

	return (
		<Page pageTitle='Регистрация'>
			{content}
		</Page>
	)
}

export default RegisterPage