import React, { createRef } from 'react'
import scss from './DescriptionArea.module.scss'


type DescriptionAreaProps = {
	caption: string,
	value: string,
	changeText: (text: string) => void
}

const DescriptionArea: React.FC<DescriptionAreaProps> = ({ caption, value, changeText }) => {
	const ref = createRef<HTMLTextAreaElement>()

	const handlerOnChange = () => {
		const text = ref.current?.value
		if (text !== undefined) changeText(text)
	}

	return (
		<div className={scss.wrapper}>
			<span>{caption}</span>
			<textarea
				className='defaultInput'
				ref={ref}
				value={value}
				cols={30}
				rows={10}
				onChange={handlerOnChange}
			/>
		</div>
	)
}

export default DescriptionArea