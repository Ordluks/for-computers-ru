import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import UsersAPI from '../../api/users'
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
	'userSlice/authThunk',
	async () => {
		const id = await UsersAPI.auth()
		
		if (!id) return null
		return await UsersAPI.fetchUserById(id)
	}
)

export const userSlice = createSlice({
	name: 'userSlice',
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