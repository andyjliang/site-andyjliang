import React, { Component } from 'react';
import Draggable from 'react-draggable';

class PostIt extends Component {
	render() {

		let randomAngle = Math.floor(Math.random()*-25)
		let randomLeftShift = Math.floor(Math.random()*550-20)
		let randomTopShift = Math.floor(Math.random()*600-20)

		return (
			<div key={this.props.index} style={{transform: "rotate(" + randomAngle + "deg)"}} >
				<Draggable defaultPosition={{x: randomLeftShift, y: randomTopShift}} bounds={{left: -20, top: -20, right:450, bottom:500}}>
					<div className="postit" >
						<p>{this.props.text}</p>
					</div>
				</Draggable>
			</div>
		)
	}
}

export default class BulletinBoard extends Component {
  render() {

  	// Will refactor to db soon
  	let postIts = [
  		{
  			text: "Implement Ant Build w/ Topological Sort"
  		},
  		{
  			text: "Edge Detection ML Alg on space images(?)"
  		}, 
  		{
  			text: "Ionic: Simple todo app"
  		},
  		{
  			text: "ADK android: Simple todo app"
  		},
  		{
  			text: "ADK android: Simple todo app"
  		},
  		{
  			text: "Encryption Alg w/ Orgo rules"
  		},
  		{
  			text: "Try out Google's TensorFlow API on obj detection"
  		},
  		{
  			text: "Ionic: Alexa program for workout motivation"
  		},
  		{
  			text: "iOS: adopt pets w/ swiping left-right UI"
  		}
  	]

  	let postItNodes = postIts.map((postIt, index) => {
  		return (
  			<PostIt key={index} text={postIt.text}/>
  		)
  	})

    return (
    	<div className="col-lg-8 bulletin-board">
    		{postItNodes}
		</div>
    )
  }
}