import React, { Component } from 'react';

class Blog extends Component {
	constructor(props) {
		super(props);
	}
	showSinglePost(postIndex) {
		this.props.onClickPost(postIndex);
		this.props.history.push('/post');
	}
	render() {

		let postNodes = this.props.posts.map((post, postIndex) => {

			return (

				<div key={post._id} className="col-lg-8 entry">

					<h2 className="clickable" onClick={() => this.showSinglePost(postIndex)}>{post.title}</h2>

			        <p>
			        	<span className="glyphicon glyphicon-time"></span> Posted on {post.date}
			        </p>



			        <p className="tiny-text" onClick={() => this.showSinglePost(postIndex)} dangerouslySetInnerHTML={{__html: post.text.substr(0,300) + "...<b class='clickable'>Read More</b>"}}/>

			    </div>

			)

		}, this)

		return (
			<div>
				<h2>
					<span className="content-header">Latest Blog Posts</span>
				</h2>
				{postNodes}
			</div>
		)
	}	
}
export default Blog;
