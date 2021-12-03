import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../store'
import { loadThunk } from '../../../store/reducers/productsPageSlice'
import ProductsPageComponent from './ProductsPage'


const mapStateToProps = (state: RootState) => ({
	categoryName: state.productsPage.categoryName,
	products: state.productsPage.products
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	doLoad(category: string | undefined) {
		dispatch(loadThunk(category))
	}
})

const ProductsPage = connect(mapStateToProps, mapDispatchToProps)(ProductsPageComponent)

export default ProductsPage