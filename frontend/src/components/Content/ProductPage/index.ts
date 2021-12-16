import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../store'
import { loadThunk } from '../../../store/reducers/productPageSlice'
import ProductPageComponent from './ProductPage'


const mapStateToProps = (state: RootState) => ({
	product: state.productPage.product
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	doLoad(id: number) {
		dispatch(loadThunk(id))
	}
})

const ProductPage = connect(mapStateToProps, mapDispatchToProps)(ProductPageComponent)

export default ProductPage