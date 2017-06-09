import React, { Component } from 'react';
import axios from 'axios';

class PostSummary extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		alert('yo');
	}
	render() {
		return(
			<div className="col-lg-8">

				<h2 className="clickable" onClick={this.handleClick}>{this.props.title}</h2>

		        <p><span className="glyphicon glyphicon-time"></span> Posted on {this.props.date}</p>

		        <p className="tiny-text clickable" onClick={this.handleClick} dangerouslySetInnerHTML={{__html: this.props.text.substr(0,200) + "...<b>Read More</b>"}}/>

		    </div>
		);
	}
}

export default class Blog extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [] };
	}
	componentWillMount() {
		axios.get('/api/blog')
			.then(
				(res) => {
					this.setState({ data: res.data});
				}
			);
	}
	render() {
		let postNodes = this.state.data.map(post => {
			return (<PostSummary key={ post._id } text={ post.text } date={ post.date } title={ post.title } />);
		})
		return (
			<div>
				<h2>{this.props.title}</h2>
				{postNodes}
			</div>
		)
	}	
}
