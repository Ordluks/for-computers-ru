import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import scss from './LoadingScreen.module.scss'


const LoadingScreen: React.FC = () => {
	return (
		<div className={scss.wrapper}>
			<div className={scss.spinner}>
				<FontAwesomeIcon icon={faCircleNotch} />
			</div>
		</div>
	)
}

export default LoadingScreen