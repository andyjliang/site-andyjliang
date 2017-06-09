import React, { Component } from 'react';

class SocialLink extends Component {
  render() {
    return (
      <a className={"btn btn-lg btn-social-icon btn-"+this.props.name} target="_blank" href={this.props.url} title={"Find Me on "+this.props.name}>
        <span className={"fa fa-"+this.props.name}/>
      </a>
    )
  }
}

export default class ProfileCard extends Component {
  render() {
    var githubURL = "https://github.com/andyjliang";
    var facebookURL = "https://facebook.com/JandyJ"
    var googleURL = "https://google.com/+AndyLiangSoftwareProgrammer";
    var linkedInURL = "https://linkedin.com/in/andy-liang";
    var twitterURL = "https://twitter.com/AndyJLiang";
    return (
      <div className="profile-card col-md-4 px-2">

        <div className="well">

          <div className="myphoto"/>  

          <p className="tiny-text">
            I'm Andy Liang. I'm a Front End Developer in Los Angeles, collaborating on projects, and conquering kimchi tacos. I specialize on Node.js apps with ReactJS and KnockoutJS frameworks. Check me out on my social avenues!
          </p>

          <SocialLink name="github" url={githubURL}/>
          <SocialLink name="linkedin" url={linkedInURL}/>
          <SocialLink name="facebook" url={facebookURL}/>
          <SocialLink name="google" url={googleURL}/>
          <SocialLink name="twitter" url={twitterURL}/>

          <hr/>

          <h4 className="clickable">Contact Me</h4>

          <hr/>

          <h4 className="clickable">Recent Posts</h4>

        </div>

      </div>
    )
  }
}