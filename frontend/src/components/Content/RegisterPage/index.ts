import { RootState } from './../../../store/index'
import { connect } from 'react-redux'
import RegisterPageComponent from './RegisterPage'


const RegisterPage = connect()(RegisterPageComponent)

export default RegisterPage