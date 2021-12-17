import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { Product } from '../../models/Product'

type MainPageState = {
	randomProducts: Product[]
}

const initialState: MainPageState = {
	randomProducts: []
}

export const loadThunk = createAsyncThunk<void, void, {state: RootState}>(
	'mainPage/loadThunk',
	async (_, {getState}) => {
		
	}
)

const mainPageSlice = createSlice({
	name: 'mianPage',
	initialState,
	reducers: {}
})

export default mainPageSlice.reducer