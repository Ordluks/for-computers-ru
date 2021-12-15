import { connect } from 'react-redux'
import { AppDispatch, RootState } from '../../../store'
import { createProductThunk, uploadImageThunk } from '../../../store/reducers/adminPanelPageSlice'
import AdminPanelPageComponent from './AdminPanelPage'


const mapStateToProps = (state: RootState) => ({
	image: state.adminPanelPage.addProduct.image
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	doUploadImage(image: File) {
		dispatch(uploadImageThunk(image))
	},
	create() {
		dispatch(createProductThunk())
	}
})

const AdminPanelPage = connect(mapStateToProps, mapDispatchToProps)(AdminPanelPageComponent)

export default AdminPanelPage