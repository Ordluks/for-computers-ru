import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../../../../store/index'
import TextInputComponent from '../../shared/TextInput'



const mapStateToProps = (state: RootState) => ({
  caption: 'Фамилия',
  value: state.registerPage.inputs.lastName
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeText(text: string) {

  }
})

const LastNameInput = connect(mapStateToProps, mapDispatchToProps)(TextInputComponent)

export default LastNameInput