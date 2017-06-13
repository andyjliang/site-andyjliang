import { connect } from 'react-redux'
import Resume from '../components/Resume'

const mapStateToProps = (state) => state

const mapDispatchToProps = {
}

const ResumeContainer = connect(
  	mapStateToProps,
  	mapDispatchToProps
)(Resume)

export default ResumeContainer
