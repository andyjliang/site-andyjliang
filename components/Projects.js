import React, { Component } from 'react';
import BulletinBoard from './BulletinBoard'

export default class Projects extends Component {
  render() {
    return (
    	<div>
			<h2>
				<span className="content-header">Projects Bulletin: Todo Ideas</span>
			</h2>
			<BulletinBoard/>
			<div className="col-lg-8">
				<h2><span className="glyphicon glyphicon-hourglass"></span>Coming soon ... </h2>
				<p>Listing my ongoing and finished projects</p>
			</div>
		</div>
    )
  }
}