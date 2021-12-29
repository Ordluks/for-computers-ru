import { connect } from 'react-redux'
import { BasketNode } from '../../../../models/BasketNode'
import { AppDispatch } from '../../../../store'
import { changeBasketThunk } from '../../../../store/reducers/userSlice'
import BasketProductCardComponenet from './BasketProductCard'


const mapDispatchToProps = (dispatch: AppDispatch) => ({
	changeProductsCount(product: BasketNode) {
		dispatch(changeBasketThunk(product))
	}
})

const BasketProductCard = connect(null, mapDispatchToProps)(BasketProductCardComponenet)

export default BasketProductCard