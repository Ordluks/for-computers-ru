import { connect } from 'react-redux'
import { AppDispatch } from '../../../store'
import { loginThunk } from '../../../store/reducers/loginPageSlice'
import LoginPageComponent from './LoginPage'


const mapDispatchToProps = (dispatch: AppDispatch) => ({
	doLogin() {
		dispatch(loginThunk())
	}
})

const LoginPage = connect(null, mapDispatchToProps)(LoginPageComponent)

export default LoginPage