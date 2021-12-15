import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '..'
import ProductsAPI from '../../api/products'
import categoriesList, { Category } from '../../models/Categories'
import { Product } from '../../models/Product'


type ProductsPageState = {
	selectedCategory: Category
	products: Product[]
	isLoading: boolean
}

const initialState: ProductsPageState = {
	selectedCategory: {id: -1, name: ''},
	products: [],
	isLoading: false
}

export const loadThunk = createAsyncThunk<void, string | undefined, {dispatch: AppDispatch}>(
	'productsPageSlice/loadThunk',
	async (category, { dispatch }) => {
		const { clearProducts, startLoading, endLoading } = productsPageSlice.actions

		dispatch(clearProducts())
		dispatch(startLoading())

		dispatch(defineCategory(category))
		.then(() => {
			return dispatch(fetchProductsThunk())
		})
		.then(() => {
			dispatch(endLoading())
		})

	}
)

export const defineCategory = createAsyncThunk<Category, string | undefined>(
	'productsPageSlice/defineCategory',
	async (category) => {
		return categoriesList.getCategory(category)[1]
	}
)

export const fetchProductsThunk = createAsyncThunk<Product[], void, {state: RootState}>(
	'productsPageSlice/fetchProductsThunk',
	async (_, { getState }) => {
		const { id: categoryId } = getState().productsPage.selectedCategory
		return await ProductsAPI.fetchProducts(0, 30, categoryId)
	}
)

export const productsPageSlice = createSlice({
	name: 'productsPageSlice',
	initialState,
	reducers: {
		startLoading(state) {
			state.isLoading = true
		},
		endLoading(state) {
			state.isLoading = false
		},
		clearProducts(state) {
			state.products = []
		}
	},
	extraReducers: (builder) => {
		builder.addCase(defineCategory.fulfilled, (state, action: PayloadAction<Category>) => {
			state.selectedCategory = action.payload
		})

		builder.addCase(fetchProductsThunk.fulfilled, (state, action: PayloadAction<Product[]>) => {
			state.products = state.products.concat(action.payload)
		})
	}
})

export default productsPageSlice.reducer