import React, { createRef } from 'react'
import scss from './NumInput.module.scss'


type NumInputProps = {
	caption: string
	value: number
	min?: number
	changeValue: (value: number) => void
}

const NumInput: React.FC<NumInputProps> = ({ caption, value, min, changeValue }) => {
	const ref = createRef<HTMLInputElement>()

	const handlerOnChange = () => {
		const text = ref.current?.value
		if (text !== undefined) changeValue(Number(text))
	}

	return (
		<div className={scss.wrapper}>
			<span>{caption}</span>
			<input
				type='number'
				className='defaultInput'
				ref={ref}
				value={value}
				min={min}
				onChange={handlerOnChange}
			/>
		</div>
	)
}

export default NumInput