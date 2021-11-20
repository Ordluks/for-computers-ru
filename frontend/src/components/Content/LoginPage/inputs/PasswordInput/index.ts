import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../../../../../store'
import { loginPageSlice } from '../../../../../store/reducers/loginPageSlice'
import PasswordInputComponent from './PasswordInput'


const { passwordInputChange, showPassword, hidePassword } = loginPageSlice.actions

const mapStateToProps = (state: RootState) => {
	const { text, visibility } = state.loginPage.inputs.password

	return {
		value: text,
		visibility
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
	changeText(text: string) {
		dispatch(passwordInputChange(text))
	},

	show() {
		dispatch(showPassword())
	},
	
	hide() {
		dispatch(hidePassword())
	}
})

const PasswordInput = connect(mapStateToProps, mapDispatchToProps)(PasswordInputComponent)

export default PasswordInput