import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../store'
import { createUserThunk } from '../../../store/reducers/registerPageSlice'
import RegisterPageComponent from './RegisterPage'


const mapStateToProps = (state: RootState) => ({
	registerError: state.registerPage.error
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	doCreateUser() {
		dispatch(createUserThunk())
	}
})

const RegisterPage = connect(mapStateToProps, mapDispatchToProps)(RegisterPageComponent)

export default RegisterPage