import React from 'react'
import scss from './NotAuth.module.scss'


const NotAuth: React.FC = () => {
	return (
		<p className={scss.wrapper}>
			Вы не вошли в аккаунт
		</p>
	)
}

export default NotAuth