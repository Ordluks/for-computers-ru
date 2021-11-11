import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Result } from 'check-password-strength'
import { checkPasswordStrenght } from '../../checkPasswordStrenght'


type RegisterPageState = {
	inputs: {
		firstName: string,
		lastName: string,
		email: string,
		password: {
			text: string,
			visibility: boolean,
			difficult: Result<string> | {}
		}
	}
}

const initialState: RegisterPageState = {
	inputs: {
		firstName: '',
		lastName: '',
		email: '',
		password: {
			text: '',
			visibility: false,
			difficult: {}
		}
	}
}

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
		passwordInputsChange(state, action: PayloadAction<string>) {
			state.inputs.password.text = action.payload
			state.inputs.password.difficult = checkPasswordStrenght(action.payload)
		},
		showPassword(state) {
			state.inputs.password.visibility = true
		},
		hidePassword(state) {
			state.inputs.password.visibility = false
		}
	}
})

const registerPageReducer = registerPageSlice.reducer
export default registerPageReducer
