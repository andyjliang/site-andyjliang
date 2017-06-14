import React, { Component } from 'react';

var Carousel = require('react-bootstrap').Carousel

const SocialLink = ({name, url}) => (
  <a className={"btn btn-lg btn-social-icon btn-"+name} target="_blank" href={url} title={"Find Me on "+name}>
    <span className={"fa fa-"+name}/>
  </a>
)

export default class ProfileCard extends Component {
  constructor(props) {
    super(props);
  }
  redirectToResume() {
    this.props.history.push('/resume');    
  }
  showSinglePost(postIndex) {
    this.props.onClickPost(postIndex);
    this.props.history.push('/post');
  }
  render() {

    // Generating Nodes for Recent Posts 
    let recentPostsHeaderSlice = this.props.posts.slice(0,5).map((post, postIndex) => (
        <div key={post._id}>
          <h6 className="clickable" onClick={() => this.showSinglePost(postIndex)}>
            <span className="glyphicon glyphicon-pushpin"></span>
            {post.title}
          </h6>
        </div>
    ), this)

    let selfDescription = "I'm Andy Liang. I'm a Software Developer in Los Angeles, " + 
        "collaborating on projects, exploring new tech, and blogging about my learnings. I specialize on Node.js apps " + 
        "with ReactJS and KnockoutJS frameworks. Check me out on my social avenues!"

    let carouselItemsSrcs = ["aboutme", "tokyo"]
    let carouselItems = carouselItemsSrcs.map((src, index) => (
        <Carousel.Item key={index}>
          <img height={100} src={"/styles/images/"+src+".png"}/>
        </Carousel.Item>
    ))

    return (
      <div className="profile-card col-md-4 px-2">

        <div className="well">

          <Carousel>

              {carouselItems}
            
          </Carousel>

          <p className="tiny-text">{selfDescription}</p>

          <SocialLink name="github" url={this.props.githubURL}/>
          <SocialLink name="linkedin" url={this.props.linkedInURL}/>
          <SocialLink name="facebook" url={this.props.facebookURL}/>
          <SocialLink name="google" url={this.props.googleURL}/>
          <SocialLink name="twitter" url={this.props.twitterURL}/>


          <hr/>

          <h4>Recent Posts</h4>

          {recentPostsHeaderSlice}

          <hr/>

          <h4 className="clickable">  
            <a className="profilecard-black-text" target="_blank" href="http://tech.mit.edu/author/Andy+Liang/">
              MIT Tech Publications
              <div className="spacer"/>
              <span className="glyphicon glyphicon-education"></span>
            </a>
          </h4>

          <hr/>

          <h4 className="clickable">
            <a className="profilecard-black-text" target="_blank" href="https://github.com/andyjliang/site-andyjliang">
              About this site
              <div className="spacer"/>
              <span className="fa fa-github" style={{fontSize: '1.3em'}}></span>
            </a>
          </h4>

          <hr/>

          <h4 className="clickable" onClick={() => this.redirectToResume()}>
            Contact Me 
            <div className="spacer"/>
            <span className="glyphicon glyphicon-envelope"></span>
          </h4>

        </div>

      </div>
    )
  }
}