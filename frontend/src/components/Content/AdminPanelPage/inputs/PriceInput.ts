import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../../store'
import { adminPanelPageSlice } from '../../../../store/reducers/adminPanelPageSlice'
import NumInput from '../../shared/NumInput'

const { changePriceInput } = adminPanelPageSlice.actions


const mapStateToProps = (state: RootState) => ({
	caption: 'Цена (рубли)',
	value: state.adminPanelPage.addProduct.price
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	changeValue(value: number) {
		dispatch(changePriceInput(value))
	}
})

const PriceInput = connect(mapStateToProps, mapDispatchToProps)(NumInput)

export default PriceInput