import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../../store'
import { adminPanelPageSlice } from '../../../../store/reducers/adminPanelPageSlice'
import NumInput from '../../shared/NumInput'

const { chnageDiscountInput } = adminPanelPageSlice.actions

const mapStateToProps = (state: RootState) => ({
	caption: 'Скидка (проценты)',
	value: state.adminPanelPage.addProduct.discount
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	changeValue(value: number) {
		dispatch(chnageDiscountInput(value))
	}
})

const DiscountInput = connect(mapStateToProps, mapDispatchToProps)(NumInput)

export default DiscountInput