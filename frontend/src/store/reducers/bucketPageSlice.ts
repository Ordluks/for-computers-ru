import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import ProductsAPI from '../../api/products'
import { Product, ProductInBasket } from '../../models/Product'


type BucketPageState = {
	products: ProductInBasket[]
}

const initialState: BucketPageState = {
	products: []
}

export const loadThunk = createAsyncThunk<ProductInBasket[], void, {state: RootState}>(
	'basketPage/loadThunk',
	async (_, { getState }) => {
		const basket = getState().user.user?.basket
		if ( !basket ) return []
		const productsFromBasket = await Promise.all(basket.map(async ({ id, count }): Promise<ProductInBasket> => {
			const product = await ProductsAPI.fetchProductById(id)
			return {
				product,
				count
			}
		}))

		return productsFromBasket
	}
)

const basketPageSlice = createSlice({
	name: 'basketPage',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loadThunk.fulfilled, (state, action) => {
			state.products = action.payload
		})
	} 
})

export default basketPageSlice.reducer