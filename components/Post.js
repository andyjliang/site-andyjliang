import React, { Component } from 'react';

export default class Post extends Component {
	constructor(props) {
		super(props);
	}
	redirectBack() {
		this.props.history.push('/');
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

		        <br/><br/>
		        <br/><br/>

		        <h3 className="clickable" onClick={() => this.redirectBack()}><span className="glyphicon glyphicon-chevron-left"></span> Back</h3>

		    </div>
		)
	}
}