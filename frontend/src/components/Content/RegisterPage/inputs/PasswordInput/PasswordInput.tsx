import React, { createRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import scss from './PasswordInput.module.scss'
import classNames from 'classnames'


type PasswordInputProps = {
	value: string,
	visibility: boolean,
	difficult: any,
	changeText(text: string): void,
	show(): void,
	hide(): void
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, visibility, difficult, changeText, show, hide }) => {
	const ref = createRef<HTMLInputElement>()

	const handlerOnChange = () => {
		const text = ref.current?.value
		if (text !== undefined) changeText(text)
	}

	let strenghtClass = null
	let strenghtMsg = ''

	if (difficult !== null) {
		strenghtClass = [
			scss.week,
			scss.week,
			scss.medium,
			scss.strong
		][difficult.id]
		
		strenghtMsg = difficult.value
	}

	const [icon, type] = visibility ?
		[<FontAwesomeIcon icon={faEyeSlash} onClick={hide} />, 'text'] :
		[<FontAwesomeIcon icon={faEye} onClick={show} />, 'password']

	return (
		<div className={scss.wrapper}>
			<span>Пароль</span>
			<div className={classNames(scss.password, strenghtClass, 'defaultInput')}>
				<input
					type={type}
					ref={ref}
					value={value}
					onChange={handlerOnChange}
				/>
				<button className={scss.togle}>
					{icon}
				</button>
			</div>
			<span className={classNames(scss.strenghtMsg, strenghtClass)}>{strenghtMsg}</span>
		</div>
	)
}

export default PasswordInput