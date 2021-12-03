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
		const user = await UsersAPI.auth()
		return user
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
				state.isLogin = true
				state.user = user
			}
		})
	}
})

export default userSlice.reducer