import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { encode } from 'js-base64'
import { RootState } from '..'
import ProductsAPI from '../../api/products'
import { Product } from '../../models/Product'


type AdminPanelPageState = {
	addProduct: {
		name: string
		description: string
		category: number
		price: number
		discount: number
		image: string | null
		imageBase64: string | null
	}
}

const initialState: AdminPanelPageState = {
	addProduct: {
		name: '',
		description: '',
		category: 0,
		price: 0,
		discount: 0,
		image: null,
		imageBase64: null
	}
}

export const uploadImageThunk = createAsyncThunk<string[], File>(
	'adminPanelPageSlice/uploadImageThunk',
	async (image) => {
		const dataUrl = await new Promise<string>((resolve) => {
			const fileReder = new FileReader()
			fileReder.onload = () => {
				resolve(fileReder.result as string)
			}
			fileReder.readAsDataURL(image)
		})
		const blob = await new Promise<string>((resolve) => {
			const fileReder = new FileReader()
			fileReder.onload = () => {
				resolve(fileReder.result as string)
			}
			fileReder.readAsBinaryString(image)
		})

		return [ dataUrl, blob]
	}
)

export const createProductThunk = createAsyncThunk<void, void, {state: RootState}>(
	'adminPanelPageSlice/createProductThunk',
	async (_, {getState}) => {
		const { name, description, category, price, discount, imageBase64: imageBlob } = getState().adminPanelPage.addProduct
		
		if (imageBlob === null) {
			return
		}

		const product: Product = {
			id: 0,
			name,
			description,
			category: {id: category, name: ''},
			price,
			discount,
			image: imageBlob
		}
		await ProductsAPI.createProduct(product)
	}
)

export const adminPanelPageSlice = createSlice({
	name: 'adminPanelPageSlice',
	initialState,
	reducers: {
		changeNameInput(state, action: PayloadAction<string>) {
			state.addProduct.name = action.payload
		},
		changeDescriptionArea(state, action: PayloadAction<string>) {
			state.addProduct.description = action.payload
		},
		changeCategorySelect(state, action: PayloadAction<number>) {
			state.addProduct.category = action.payload
		},
		changePriceInput(state, action: PayloadAction<number>) {
			state.addProduct.price = action.payload
		},
		chnageDiscountInput(state, action: PayloadAction<number>) {
			state.addProduct.discount = action.payload
		}
	},
	extraReducers(builder) {
		builder.addCase(uploadImageThunk.fulfilled, (state, action: PayloadAction<string[]>) => {
			const [ dataUrl, blob ] = action.payload
			const base64 = encode(blob)
			
			state.addProduct.image = dataUrl
			state.addProduct.imageBase64 = base64
		})
	}
})

export default adminPanelPageSlice.reducer