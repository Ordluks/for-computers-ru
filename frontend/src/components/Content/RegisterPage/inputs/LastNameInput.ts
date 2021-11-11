import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../../store/index'
import { registerPageSlice } from '../../../../store/reducers/registerPageSlice'
import TextInputComponent from '../../shared/TextInput'


const { lastNameInputChange } = registerPageSlice.actions

const mapStateToProps = (state: RootState) => ({
  caption: 'Фамилия',
  value: state.registerPage.inputs.lastName
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  changeText(text: string) {
    dispatch(lastNameInputChange(text))
  }
})

const LastNameInput = connect(mapStateToProps, mapDispatchToProps)(TextInputComponent)

export default LastNameInput