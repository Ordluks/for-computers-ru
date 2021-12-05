import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../../store'
import { adminPanelPageSlice } from '../../../../store/reducers/adminPanelPageSlice'
import TextInput from '../../shared/TextInput'

const { changeNameInput } = adminPanelPageSlice.actions


const mapStateToProps = (state: RootState) => ({
	caption: 'Наименование товара',
	value: state.adminPanelPage.addProduct.name
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	changeText(text: string) {
		dispatch(changeNameInput(text))
	}
})

const NameInput = connect(mapStateToProps, mapDispatchToProps)(TextInput)

export default NameInput