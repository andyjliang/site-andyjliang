import React, { Component } from 'react';

export default class Post extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let postIndex = this.props.postIndex
		let post = this.props.posts[postIndex]

		return (
			<div key={post._id} className="col-lg-8">

				<h2>{post.title}</h2>

		        <p><span className="glyphicon glyphicon-time"></span> Posted on {post.date}</p>

		        <br/><br/>

		        <p dangerouslySetInnerHTML={{__html: post.text }} />

		    </div>
		)
	}
}