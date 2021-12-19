import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import ProductsAPI from '../../api/products'
import { ProductInBasket } from '../../models/Product'
import { Status } from '../../models/Status'


type BucketPageState = {
	products: ProductInBasket[],
	status: Status
}

const initialState: BucketPageState = {
	products: [],
	status: 'idle'
}

export const loadThunk = createAsyncThunk<ProductInBasket[], void, { state: RootState }>(
	'basketPage/loadThunk',
	async (_, { getState }) => {
		const basket = getState().user.user?.basket
		if (!basket) return []
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