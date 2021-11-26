import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Result } from 'check-password-strength'
import UsersAPI, { UserCreatingData } from '../../api/users'
import { checkPasswordStrenght } from '../../utils'
import { RootState } from '..'


type RegisterPageState = {
	inputs: {
		firstName: string,
		lastName: string,
		email: string,
		password: {
			text: string,
			visibility: boolean,
			difficult: Result<string> | null
		}
	},
	error: string,
	success: boolean
}

const initialState: RegisterPageState = {
	inputs: {
		firstName: '',
		lastName: '',
		email: '',
		password: {
			text: '',
			visibility: false,
			difficult: null
		}
	},
	error: '',
	success: false
}

export const createUserThunk = createAsyncThunk<string | null, void, {state: RootState}>(
	'registerPage/createUserThunk',
	async (_, thunkAPI) => {
		thunkAPI.dispatch(registerPageSlice.actions.validateInputs())
		const { error } = thunkAPI.getState().registerPage
		if (error !== '') {
			return error
		}

		const { email, password: {text: passwordText}, firstName, lastName } = thunkAPI.getState().registerPage.inputs

		const user: UserCreatingData = {
			email,
			password: passwordText,
			firstName,
			lastName
		}
		const result = await UsersAPI.createUser(user)
		return result
	}
) 

export const registerPageSlice = createSlice({
	name: 'registerPage',
	initialState,
	reducers: {
		firstNameInputChange(state, action: PayloadAction<string>) {
			state.inputs.firstName = action.payload
		},
		lastNameInputChange(state, action: PayloadAction<string>) {
			state.inputs.lastName = action.payload
		},
		emailInputChange(state, action: PayloadAction<string>) {
			state.inputs.email = action.payload
		},
		passwordInputChange(state, action: PayloadAction<string>) {
			state.inputs.password.text = action.payload
			state.inputs.password.difficult = checkPasswordStrenght(action.payload)
		},
		showPassword(state) {
			state.inputs.password.visibility = true
		},
		hidePassword(state) {
			state.inputs.password.visibility = false
		},
		validateInputs(state) {
			const {
				firstName, lastName, email,
				password: {
					text: passwordText,
					difficult: passwordDificult
				}
			} = state.inputs

			let error = ''
			if (!firstName) {
				error = 'Вы не указали имя'
			}
			else if (!lastName) {
				error = 'Вы не указали фамилию'
			}
			else if (!email) {
				error = 'Вы не указали e-mail'
			}
			else if ( !(/[a-zA-Z0-9]+@[a-z]+\.[a-z]+/gm).test(email) ) {
				error = 'E-mail указан не корректно'
			}
			else if (!passwordText) {
				error = 'Вы не указали пароль'
			}
			else if (passwordDificult !== null && passwordDificult.id < 2) {
				error = 'Недостаточно сильный пароль'
			}
			state.error = error
		}
	},

	extraReducers: (builder) => {
		builder.addCase(createUserThunk.fulfilled, (state, action: PayloadAction<string | null>) => {
			const errorMsg = action.payload
			if (errorMsg !== null) state.error = errorMsg
			state.success = true
		})
	}
})

const registerPageReducer = registerPageSlice.reducer
export default registerPageReducer