import React from 'react'
import scss from './InfoItem.module.scss'


type InfoItemProps = {
	caption: string
	text: string
}

const InfoItem: React.FC<InfoItemProps> = ({ caption, text }) => {
	return (
		<div>
			{caption}: {text}
		</div>
	)
}

export default InfoItem