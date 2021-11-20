import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type LoginPageState = {
	inputs: {
		email: string
		password: {
			text: string
			visibility: boolean
		}
	}
}

const initialState: LoginPageState = {
	inputs: {
		email: 'email',
		password: {
			text: 'password',
			visibility: false
		}
	}
}

export const loginPageSlice = createSlice({
	name: 'loginPage',
	initialState,
	reducers: {
		passwordInputChange(state, action: PayloadAction<string>) {
			state.inputs.password.text = action.payload
		},
		showPassword(state) {
			state.inputs.password.visibility = true
		},
		hidePassword(state) {
			state.inputs.password.visibility = false
		}
	}
})

export default loginPageSlice.reducer