import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '..'
import ProductsAPI, { FetchProductsResult } from '../../api/products'
import categoriesList, { Category } from '../../models/Categories'
import { Product } from '../../models/Product'


const PRODUCTS_ON_PAGE = 30

type ProductsPageState = {
	selectedCategory: Category
	products: Product[]
	pagesCount: number
	selectedPage: number
	isLoading: boolean
}

const initialState: ProductsPageState = {
	selectedCategory: {id: -1, name: ''},
	products: [],
	pagesCount: 0,
	selectedPage: 0,
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

export const fetchProductsThunk = createAsyncThunk<FetchProductsResult, void, {state: RootState}>(
	'productsPageSlice/fetchProductsThunk',
	async (_, { getState }) => {
		const { selectedCategory: {id: categoryId}, selectedPage } = getState().productsPage
		return await ProductsAPI.fetchProducts(selectedPage * PRODUCTS_ON_PAGE, PRODUCTS_ON_PAGE, categoryId)
	}
)

export const changePageThunk = createAsyncThunk<void, number, {dispatch: AppDispatch}>(
	'productsPageSlice/changePageThunk',
	async (num: number, { dispatch }) => {
		const {selectPage} = productsPageSlice.actions
		dispatch(selectPage(num))
		dispatch(fetchProductsThunk())
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
			state.pagesCount = 0
		},
		selectPage(state, action: PayloadAction<number>) {
			state.selectedPage = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(defineCategory.fulfilled, (state, action: PayloadAction<Category>) => {
			state.selectedCategory = action.payload
		})

		builder.addCase(fetchProductsThunk.fulfilled, (state, action: PayloadAction<FetchProductsResult>) => {
			const { products, allProductsCount } = action.payload
			state.products = products
			state.pagesCount = Math.ceil(allProductsCount / PRODUCTS_ON_PAGE)
		})
	}
})

export default productsPageSlice.reducer