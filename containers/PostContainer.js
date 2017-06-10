import { connect } from 'react-redux'
import Post from '../components/Post'

const mapStateToProps = (state) => state

const mapDispatchToProps = {
}

const PostContainer = connect(
  	mapStateToProps,
  	mapDispatchToProps
)(Post)

export default PostContainer
