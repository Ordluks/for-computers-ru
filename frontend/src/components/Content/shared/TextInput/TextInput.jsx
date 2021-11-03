import { createRef } from 'react'
import scss from './TextInput.module.scss'


const TextInput = ({ caption, value, changeText }) => {
	const ref = createRef()

	const handlerOnChange = () => {
		const text = ref.current.value
		changeText(text)
	}

	return (
		<div className={scss.wrapper}>
			<span>{caption}</span>
			<input
				type='text'
				className='standartInput'
				ref={ref}
				value={value}
				onChange={handlerOnChange}
			/>
		</div>
	)
}

export default TextInput