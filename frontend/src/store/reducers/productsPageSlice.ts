import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import categoriesList from '../../models/Categories'
import { Product } from '../../models/Product'


type ProductsPageState = {
	categoryName: string
	products: Product[]
}

const initialState: ProductsPageState = {
	categoryName: '',
	products: [
		{
			id: '0',
			name: 'Test',
			description: 'Test product',
			category: {id: 3, name: 'Другое'},
			image: ''
		},
		{
			id: '1',
			name: 'Test2',
			description: 'Test product 2',
			category: {id: 3, name: 'Другое'},
			image: ''
		}
	]
}

export const loadThunk = createAsyncThunk<string, string | undefined>(
	'productsPageSlice/loadThunk',
	async (category) => {
		const [ textId, { name } ] = categoriesList.getCategory(category) || ['all', {id: -1, name: 'Все товары'}]
		return name
	}
)

export const productsPageSlice = createSlice({
	name: 'productsPageSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loadThunk.fulfilled, (state, action: PayloadAction<string>) => {
			state.categoryName = action.payload
		})
	}
})

export default productsPageSlice.reducer