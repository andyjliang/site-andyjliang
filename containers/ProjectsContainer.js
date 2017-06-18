import { connect } from 'react-redux'
import Projects from '../components/Projects'

const mapStateToProps = (state) => state

const mapDispatchToProps = {
}

const ProjectsContainer = connect(
  	mapStateToProps,
  	mapDispatchToProps
)(Projects)

export default ProjectsContainer
