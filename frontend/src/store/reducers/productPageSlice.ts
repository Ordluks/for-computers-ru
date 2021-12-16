import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import ProductsAPI from '../../api/products'
import { Product } from '../../models/Product'


type ProductPageState = {
	product: Product | null
}

const initialState: ProductPageState = {
	product: null
}

export const loadThunk = createAsyncThunk<Product, number>(
	'productPage/loadThunk',
	async (id) => {
		return await ProductsAPI.fetchProductById(id)
	}
)

const productPageSlice = createSlice({
	name: 'productPage',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loadThunk.fulfilled, (state, action: PayloadAction<Product>) => {
			state.product = action.payload
		})
	}
})

export default productPageSlice.reducer