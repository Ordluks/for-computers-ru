import { Options, passwordStrength, Result } from 'check-password-strength'
import produce from 'immer'
import { RegisterPageAction } from './actions'
import * as actionTypes from './actionTypes'


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
		firstName: '1',
		lastName: '2',
		email: '4',
		password: {
			text: '5',
			visibility: false,
			difficult: {}
		}
	}
}

const registerPageReducer = (state = initialState, action: RegisterPageAction) => {
	switch (action.type) {
		case actionTypes.CHANGE_PASSWORD_TEXT:
			return produce(state, draft => {
				draft.inputs.password.text = action.text
				draft.inputs.password.difficult = checkPassword(action.text)
			})
		
		case actionTypes.SHOW_PASSWORD:
			return produce(state, draft => {
				draft.inputs.password.visibility = true
			})
		
		case actionTypes.HIDE_PASSWORD:
			return produce(state, draft => {
				draft.inputs.password.visibility = false
			})
		
		default:
			return state
	}
}


const checkPassword = (password: string) => {
	const options: Options<string> = [
		{
			id: 0,
			value: "Очень слабый",
			minDiversity: 0,
			minLength: 0
		},
		{
			id: 1,
			value: "Слабый",
			minDiversity: 2,
			minLength: 6
		},
		{
			id: 2,
			value: "Средний",
			minDiversity: 4,
			minLength: 8
		},
		{
			id: 3,
			value: "Сильный",
			minDiversity: 4,
			minLength: 10
		}
	]

	return passwordStrength(password, options)
}

export default registerPageReducer