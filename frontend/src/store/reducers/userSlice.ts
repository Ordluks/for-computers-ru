import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import UsersAPI from '../../api/users'
import { BasketNode } from '../../models/BasketNode'
import { User } from '../../models/User'


type UserState = {
	isLogin: boolean
	user: User | null
}

const initialState: UserState = {
	isLogin: false,
	user: null
}

export const authThunk = createAsyncThunk(
	'user/authThunk',
	async () => {
		const id = await UsersAPI.auth()
		
		if (!id) return null
		return await UsersAPI.fetchUserById(id)
	}
)

export const changeBasketThunk = createAsyncThunk<BasketNode[] | void, BasketNode, {state: RootState}>(
	'user/changeBasketThunk',
	async (newProduct, { getState }) => {
		const user = getState().user.user
		if (!user) return
		const basket = user.basket.map(value => {
			const { id } = value
			if (id === newProduct.id) return {id, count: newProduct.count}
			return value
		})

		await UsersAPI.changeBasket(user.id as string, basket)
		return basket
	}
)

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		
	},
	extraReducers: (builder) => {
		builder.addCase(authThunk.fulfilled, (state, action) => {
			const user = action.payload
			if (user) {
				state.isLogin = user ? true : false
				state.user = user
			}
		})
	}
})

export default userSlice.reducer