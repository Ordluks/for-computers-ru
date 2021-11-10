import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../../../../store/index'
import { changeFirstNameText } from '../../../../store/reducers/registerPage/actions'
import TextInputComponent from '../../shared/TextInput'



const mapStateToProps = (state: RootState) => ({
  caption: 'Имя',
  value: state.registerPage.inputs.firstName
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeText(text: string) {
    dispatch(changeFirstNameText(text))
  }
})

const FirstNameInput = connect(mapStateToProps, mapDispatchToProps)(TextInputComponent)

export default FirstNameInput