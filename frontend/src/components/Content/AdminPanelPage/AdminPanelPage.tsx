import React from 'react'
import Page from '../shared/Page'
import scss from './AdminPanelPage.module.scss'
import CategorySelect from './inputs/CategorySelect'
import DescriptionArea from './inputs/DescriptionArea'
import DiscountInput from './inputs/DiscountInput'
import NameInput from './inputs/NameInput'
import PriceInput from './inputs/PriceInput'


type AdminPanelPageProps = {
	image: string | null
	doUploadImage: (image: File) => void
	create: () => void
} 

const AdminPanelPage: React.FC<AdminPanelPageProps> = ({ image, doUploadImage, create }) => {
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
					<button className='defaultButton'><label htmlFor='selectImage'>Выбрать файл</label></button>
				</div>
				<NameInput />
				<DescriptionArea />
				<CategorySelect />
				<div className={scss.numInputs}>
					<PriceInput />
					<DiscountInput />
				</div>
				<div><button className='defaultButton' onClick={create}>Добавить товар</button></div>
			</div>
		</Page>
		
	)
}

export default AdminPanelPage