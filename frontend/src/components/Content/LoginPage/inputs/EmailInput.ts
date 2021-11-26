import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../../store/index'
import { loginPageSlice } from '../../../../store/reducers/loginPageSlice'
import TextInputComponent from '../../shared/TextInput'


const { emailInputChange } = loginPageSlice.actions

const mapStateToProps = (state: RootState) => ({
  caption: 'E-mail',
  value: state.loginPage.inputs.email
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  changeText(text: string) {
    dispatch(emailInputChange(text))
  }
})

const EmailInput = connect(mapStateToProps, mapDispatchToProps)(TextInputComponent)

export default EmailInput