import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import scss from './Success.module.scss'


export const Success: React.FC = () => {
	return (
		<div className={scss.wrapper}>
			<FontAwesomeIcon icon={faCheckCircle} className={scss.icon} />
			<span className={scss.text} >Успешно!</span>
		</div>
	)
}

export default Success