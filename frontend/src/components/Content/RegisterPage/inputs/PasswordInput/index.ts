import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../../../../../store'
import { changePasswordText, showPassword, hidePassword } from '../../../../../store/reducers/registerPage/actions'
import PasswordInputComponent from './PasswordInput'


const mapStateToProps = (state: RootState) => {
	const { text, visibility, difficult } = state.registerPage.inputs.password

	return {
		value: text,
		visibility,
		difficult
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
	changeText(text: string) {
		dispatch(changePasswordText(text))
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