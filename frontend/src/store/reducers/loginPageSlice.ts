import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import UsersAPI from '../../api/users'
import { authThunk } from './userSlice'


type LoginPageState = {
	inputs: {
		email: string
		password: {
			text: string
			visibility: boolean
		}
	}
	error: string
}

const initialState: LoginPageState = {
	inputs: {
		email: '',
		password: {
			text: '',
			visibility: false
		}
	},
	error: ''
}

export const loginThunk = createAsyncThunk<string, void, {state: RootState}>(
	'loginPage/loginThunk',
	async (_, thunkAPI) => {
		const { email, password: { text: passwordText } } = thunkAPI.getState().loginPage.inputs
	 	const result = await UsersAPI.login(email, passwordText)
		thunkAPI.dispatch(authThunk())
		return result === null ? '' : result
	}
)

export const loginPageSlice = createSlice({
	name: 'loginPage',
	initialState,
	reducers: {
		emailInputChange(state, action: PayloadAction<string>) {
			state.inputs.email = action.payload
		},
		passwordInputChange(state, action: PayloadAction<string>) {
			state.inputs.password.text = action.payload
		},
		showPassword(state) {
			state.inputs.password.visibility = true
		},
		hidePassword(state) {
			state.inputs.password.visibility = false
		}
	},
	extraReducers: (builder) => {
		builder.addCase(loginThunk.fulfilled, (state, action: PayloadAction<string>) => {
			
		})
	}
})

export default loginPageSlice.reducer