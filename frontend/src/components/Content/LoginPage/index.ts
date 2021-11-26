import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../store'
import { loginThunk } from '../../../store/reducers/loginPageSlice'
import LoginPageComponent from './LoginPage'


const mapStateTopRops = (state: RootState) => ({
	loginError: state.loginPage.error,
	isSuccess: state.loginPage.success
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	doLogin() {
		dispatch(loginThunk())
	}
})

const LoginPage = connect(mapStateTopRops, mapDispatchToProps)(LoginPageComponent)

export default LoginPage