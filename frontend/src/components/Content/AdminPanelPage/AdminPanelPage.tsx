import React from 'react'
import Page from '../shared/Page'
import scss from './AdminPanelPage.module.scss'
import DescriptionArea from './inputs/DescriptionArea'
import DiscountInput from './inputs/DiscountInput'
import NameInput from './inputs/NameInput'
import PriceInput from './inputs/PriceInput'


type AdminPanelPageProps = {
	image: string | null
	doUploadImage: (image: File) => void
} 

const AdminPanelPage: React.FC<AdminPanelPageProps> = ({ image, doUploadImage }) => {
	const imgSelectRef = React.createRef<HTMLInputElement>()

	const fileSelectedHandler = () => {
		const filesList = imgSelectRef.current?.files
		if (filesList) {
			const file = filesList[0]
			
			doUploadImage(file)
		}
	}

	const imgElement = image !== null ? <img className={scss.image} src={image} alt="Загруженное изображение" /> : null
	
	return (
		<Page pageTitle='Админ-панель'>
			<div className={scss.wrapper}>
				<h1>Админ-панель</h1>
				<div className={scss.imageOuter}>
					{imgElement}
				</div>
				<div className={scss.selectImageOuter}>
					<input className={scss.selectImage} id='selectImage' type='file' ref={imgSelectRef} onChange={fileSelectedHandler} />
					<label htmlFor='selectImage'><button className='defaultButton'>Выбрать файл</button></label>
				</div>
				<NameInput />
				<DescriptionArea />
				<div className={scss.numInputs}>
					<PriceInput />
					<DiscountInput />
				</div>
				<div><button className='defaultButton'>Добавить товар</button></div>
			</div>
		</Page>
		
	)
}

export default AdminPanelPage