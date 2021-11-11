import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../../store/index'
import { registerPageSlice } from '../../../../store/reducers/registerPageSlice'
import TextInputComponent from '../../shared/TextInput'


const { firstNameInputChange } = registerPageSlice.actions

const mapStateToProps = (state: RootState) => ({
  caption: 'Имя',
  value: state.registerPage.inputs.firstName
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  changeText(text: string) {
    dispatch(firstNameInputChange(text))
  }
})

const FirstNameInput = connect(mapStateToProps, mapDispatchToProps)(TextInputComponent)

export default FirstNameInput