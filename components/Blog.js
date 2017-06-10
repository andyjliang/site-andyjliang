import React, { Component } from 'react';

class Blog extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		debugger
		let postNodes = this.props.posts.map((post, postIndex) => {
			return (
				<div className="col-lg-8">

					<h2 className="clickable" onClick={() => this.props.showSinglePost(postIndex)}>{post.title}</h2>

			        <p><span className="glyphicon glyphicon-time"></span> Posted on {post.date}</p>

			        <p className="tiny-text clickable" onClick={() => this.props.showSinglePost(postIndex)} dangerouslySetInnerHTML={{__html: post.text.substr(0,200) + "...<b>Read More</b>"}}/>

			    </div>
			)
		})
		return (
			<div>
				<h2>{this.props.title}</h2>
				{postNodes}
			</div>
		)
	}	
}
export default Blog;
