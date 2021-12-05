import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

type AdminPanelPageState = {
	addProduct: {
		name: string
		description: string
		price: number
		discount: number
		image: string | null
		imageBlob: string | null
	}
}

const initialState: AdminPanelPageState = {
	addProduct: {
		name: '',
		description: '',
		price: 0,
		discount: 0,
		image: null,
		imageBlob: null
	}
}

export const uploadImageThunk = createAsyncThunk<string[], File>(
	'adminPanelPageSlice/uploadImageThunk',
	async (image) => {
		const dataUrl = new Promise<string>((resolve) => {
			const fileReder = new FileReader()
			fileReder.onload = () => {
				resolve(fileReder.result as string)
			}
			fileReder.readAsDataURL(image)
		})
		return [await dataUrl, await image.text()]
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
		changePriceInput(state, action: PayloadAction<number>) {
			state.addProduct.price = action.payload
		}
	},
	extraReducers(builder) {
		builder.addCase(uploadImageThunk.fulfilled, (state, action: PayloadAction<string[]>) => {
			const [ dataUrl, blob ] = action.payload
			state.addProduct.image = dataUrl
			state.addProduct.imageBlob = blob
		})
	}
})

export default adminPanelPageSlice.reducer