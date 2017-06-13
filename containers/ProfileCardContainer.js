import { connect } from 'react-redux'
import { showSinglePost } from '../actions/BlogActions'	
import ProfileCard from '../components/ProfileCard'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => state

const mapDispatchToProps = {
	onClickPost: showSinglePost
}

const ProfileCardContainer = connect(
  	mapStateToProps,
  	mapDispatchToProps
)(withRouter(ProfileCard))

export default ProfileCardContainer
