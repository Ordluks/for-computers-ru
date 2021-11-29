import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import UsersAPI from '../../api/users'
import { validateEmail } from '../../utils'
import { authThunk } from './userSlice'


type LoginPageState = {
	inputs: {
		email: string
		password: {
			text: string
			visibility: boolean
		}
	}
	error: string,
	success: boolean
}

const initialState: LoginPageState = {
	inputs: {
		email: '',
		password: {
			text: '',
			visibility: false
		}
	},
	error: '',
	success: false
}

export const loginThunk = createAsyncThunk<string | null, void, {state: RootState}>(
	'loginPage/loginThunk',
	async (_, thunkAPI) => {
		const { email, password: { text: passwordText } } = thunkAPI.getState().loginPage.inputs

		let errorMsg = ''
		if (!email) {
			errorMsg = 'Вы не указали email'
		}
		else if (!validateEmail(email)) {
			errorMsg = 'E-mail указан не корректно'
		}
		else if (!passwordText) {
			errorMsg = 'Вы не указали пароль'
		}

		if (errorMsg !== '') {
			return errorMsg
		}

	 	const result = await UsersAPI.login(email, passwordText)
		thunkAPI.dispatch(authThunk())
		return result
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
		builder.addCase(loginThunk.fulfilled, (state, action: PayloadAction<string | null>) => {
			const errorMsg = action.payload
			if (errorMsg !== null) state.error = errorMsg
			else state.success = true
		})
	}
})

export default loginPageSlice.reducer