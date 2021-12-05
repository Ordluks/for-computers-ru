import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../../../store'
import { adminPanelPageSlice } from '../../../../../store/reducers/adminPanelPageSlice'
import DescriptionAreaComponent from './DescriptionArea'

const { changeDescriptionArea } = adminPanelPageSlice.actions

const mapStateToProps = (state: RootState) => ({
	caption: 'Описание товара',
	value: state.adminPanelPage.addProduct.description
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	changeText(text: string) {
		dispatch(changeDescriptionArea(text))
	}
})

const DescriptionArea = connect(mapStateToProps, mapDispatchToProps)(DescriptionAreaComponent)

export default DescriptionArea