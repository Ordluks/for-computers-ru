import { connect } from 'react-redux'
import { RootState } from '../../../store'
import AccountPageComponent from './AccountPage'


const mapStateToProps = (state: RootState) => ({
	user: state.user.user
})

const AccountPage = connect(mapStateToProps)(AccountPageComponent)

export default AccountPage