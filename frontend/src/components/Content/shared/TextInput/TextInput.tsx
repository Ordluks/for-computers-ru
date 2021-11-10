import React, { createRef } from 'react'
import scss from './TextInput.module.scss'


type TextInputProps = {
	caption: string,
	value: string,
	changeText: (text: string) => void
}

const TextInput: React.FC<TextInputProps> = ({ caption, value, changeText }) => {
	const ref = createRef<HTMLInputElement>()

	const handlerOnChange = () => {
		const text = ref.current?.value
		if (text !== undefined) changeText(text)
	}

	return (
		<div className={scss.wrapper}>
			<span>{caption}</span>
			<input
				type='text'
				className='defaultInput'
				ref={ref}
				value={value}
				onChange={handlerOnChange}
			/>
		</div>
	)
}

export default TextInput