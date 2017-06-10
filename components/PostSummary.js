import React, { Component } from 'react';
import {
  withRouter
} from 'react-router-dom'

class PostSummary extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.history.push('/post');
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

export default withRouter(PostSummary);