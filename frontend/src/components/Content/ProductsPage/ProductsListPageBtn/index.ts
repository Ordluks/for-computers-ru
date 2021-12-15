import { connect } from 'react-redux'
import { AppDispatch } from '../../../../store'
import { changePageThunk } from '../../../../store/reducers/productsPageSlice'
import ProductsListPageBtnComponenet from './ProductsListPageBtn'


const mapDispatchToProps = (dispatch: AppDispatch) => ({
	pageSelector(num: number) {
		dispatch(changePageThunk(num))
	}
})

const ProductsListPageBtn = connect(null, mapDispatchToProps)(ProductsListPageBtnComponenet)

export default ProductsListPageBtn