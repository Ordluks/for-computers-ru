import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../../../../store/index'
import TextInputComponent from '../../shared/TextInput'



const mapStateToProps = (state: RootState) => ({
  caption: 'E-mail',
  value: state.registerPage.inputs.email
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeText(text: string) {

  }
})

const EmailInput = connect(mapStateToProps, mapDispatchToProps)(TextInputComponent)

export default EmailInput