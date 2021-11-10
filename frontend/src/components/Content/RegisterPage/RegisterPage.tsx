import React from 'react'
import scss from './RegisterPage.module.scss'
import Page from '../shared/Page'
import FirstNameInput from './inputs/FirstNameInput'
import LastNameInput from './inputs/LastNameInput'
import EmailInput from './inputs/EmailInput'
import PasswordInput from './inputs/PasswordInput'


const RegisterPage: React.FC = () => {
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
				</div>

				<button className='defaultButton'>Отправить</button>
			</div>
		</Page>
	)
}

export default RegisterPage