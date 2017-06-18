import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ProjectsContainer from '../containers/ProjectsContainer'
import PostContainer from '../containers/PostContainer'
import BlogContainer from '../containers/BlogContainer'
import ProfileCardContainer from '../containers/ProfileCardContainer'
import ResumeContainer from '../containers/ResumeContainer'

var ReactRotatingText = require('react-rotating-text')

class App extends Component {
	render() {

		// Strings for Populating Social Links
	    let URLs = {
	    	githubURL: "https://github.com/andyjliang",
	    	facebookURL: "https://facebook.com/JandyJ",
	    	googleURL: "https://google.com/+AndyLiangSoftwareProgrammer",
	    	linkedInURL: "https://linkedin.com/in/andy-liang",
	    	twitterURL: "https://twitter.com/AndyJLiang",
		}

		return (

	        <div id="header">
	          <div className="brand">Andy Liang</div>
	          <ReactRotatingText className="address-bar" items={['Developer', 'City Cyclist', 'Proud Uncle', 'Former Chemist', 'Surprisingly Good Dancer', 'True King of the North', 'New Yorker at Heart']} />

	          <nav className="navbar navbar-default navbar-custom navbar-fixed-top" role="navigation">
	              <div className="container-fluid">

	                  <ul className="nav navbar-nav navbar-right">
	                    <li><Link to="/blog">Blog</Link></li>	
	                    <li><Link to="/resume">Resume</Link></li>
	                    <li><Link to="/projects">Projects</Link></li>	
	                  </ul>

	                </div>

	          </nav>

	          <hr/>

	          <div className="container">
	            <div className="row">
	              <div className="box">

	                <ProfileCardContainer {...URLs}/>
	                
	                <Route exact path="/" component={BlogContainer} />
	                <Route path="/blog" component={BlogContainer} />
	                <Route path="/projects" component={ProjectsContainer} />
	                <Route path="/post" component={PostContainer} />
	                <Route path="/resume" component={ResumeContainer} />
	                
	              </div>
	            </div>
	          </div>

	            <footer>
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
			                    <ul className="list-inline text-center">
			                        <li>
			                            <a target="_blank" href={URLs.twitterURL}>
			                                <span className="fa-stack fa-lg">
			                                    <i className="fa fa-circle fa-stack-2x"></i>
			                                    <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
			                                </span>
			                            </a>
			                        </li>
			                        <li>
			                            <a target="_blank" href={URLs.facebookURL}>
			                                <span className="fa-stack fa-lg">
			                                    <i className="fa fa-circle fa-stack-2x"></i>
			                                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
			                                </span>
			                            </a>
			                        </li>
			                        <li>
			                            <a target="_blank" href={URLs.githubURL}>
			                                <span className="fa-stack fa-lg">
			                                    <i className="fa fa-circle fa-stack-2x"></i>
			                                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
			                                </span>
			                            </a>
			                        </li>
			                    </ul>
			                    <p className="copyright">Copyright &copy; Andy Liang 2017</p>
			                </div>
			            </div>
			        </div>
			    </footer>

	        </div>

		)	
	}
}

export default App;