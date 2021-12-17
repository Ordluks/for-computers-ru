import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../store'
import { loadThunk } from '../../../store/reducers/bucketPageSlice'
import BasketPageComponent from './BasketPage'


const mapStateToProps = (state: RootState) => ({
	products: state.basketPage.products,
	isLogin: state.user.isLogin
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	doLoad() {
		dispatch(loadThunk())
	}
})

const BasketPage = connect(mapStateToProps, mapDispatchToProps)(BasketPageComponent)

export default BasketPage