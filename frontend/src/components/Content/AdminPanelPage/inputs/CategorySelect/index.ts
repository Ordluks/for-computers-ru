import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../../../store'
import { adminPanelPageSlice } from '../../../../../store/reducers/adminPanelPageSlice'
import CategorySelectComponent from './CategorySelect'

const { changeCategorySelect } = adminPanelPageSlice.actions

const mapStateToProps = (state: RootState) => ({
	selected: state.adminPanelPage.addProduct.category
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	doChangeCategory(selectedVlaue: number) {
		dispatch(changeCategorySelect(selectedVlaue))
	}
})

const CategorySelect = connect(mapStateToProps, mapDispatchToProps)(CategorySelectComponent)

export default CategorySelect