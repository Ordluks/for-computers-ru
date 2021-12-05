import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../store'
import { productsPageSlice, loadThunk } from '../../../store/reducers/productsPageSlice'
import ProductsPageComponent from './ProductsPage'

const { clearProducts } = productsPageSlice.actions


const mapStateToProps = (state: RootState) => ({
	categoryName: state.productsPage.selectedCategory.name,
	products: state.productsPage.products,
	isLoading: state.productsPage.isLoading
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	doLoad(category: string | undefined) {
		dispatch(loadThunk(category))
	},
	clearList() {
		dispatch(clearProducts())
	}
})

const ProductsPage = connect(mapStateToProps, mapDispatchToProps)(ProductsPageComponent)

export default ProductsPage