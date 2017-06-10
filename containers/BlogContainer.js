import { connect } from 'react-redux'
import { showSinglePost } from '../actions/BlogActions'
import Blog from '../components/Blog'

const mapStateToProps = (state) => state

const mapDispatchToProps = {
	onClickPost: showSinglePost
}

const BlogContainer = connect(
  	mapStateToProps,
  	mapDispatchToProps
)(Blog)

export default BlogContainer
