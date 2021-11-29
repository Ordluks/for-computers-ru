import { connect } from 'react-redux'
import { RootState } from '../../../store'
import AccountInfoComponent from './AccountInfo'


const mapStateToProps = (state: RootState) => ({
	user: state.user.user
})

const AccountInfo = connect(mapStateToProps)(AccountInfoComponent)

export default AccountInfo