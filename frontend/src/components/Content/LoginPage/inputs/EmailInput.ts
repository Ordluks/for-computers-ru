import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../../store/index'
import { registerPageSlice } from '../../../../store/reducers/registerPageSlice'
import TextInputComponent from '../../shared/TextInput'


const { emailInputChange } = registerPageSlice.actions

const mapStateToProps = (state: RootState) => ({
  caption: 'E-mail',
  value: state.registerPage.inputs.email
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  changeText(text: string) {
    dispatch(emailInputChange(text))
  }
})

const EmailInput = connect(mapStateToProps, mapDispatchToProps)(TextInputComponent)

export default EmailInput