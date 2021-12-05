import { connect } from 'react-redux'
import { RootState } from '../../../../store'
import NumInput from '../../shared/NumInput'


const mapStateToProps = (state: RootState) => ({
	caption: 'Скидка (проценты)',
	value: state.adminPanelPage.addProduct.discount
})

const mapDispatchToProps = () => ({
	changeValue(value: number) {

	}
})

const DiscountInput = connect(mapStateToProps, mapDispatchToProps)(NumInput)

export default DiscountInput