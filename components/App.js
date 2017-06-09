import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Blog from './Blog';
import ProfileCard from './ProfileCard';
import Projects from './Projects'

class App extends Component {
	render() {
		return (

	        <div id="header">
	          <div className="brand">Andy Liang</div>
	          <div className="address-bar">Developer</div>

	          <nav className="navbar navbar-default navbar-custom navbar-fixed-top" role="navigation">
	              <div className="container-fluid">

	                  <ul className="nav navbar-nav navbar-right">
	                    <li><Link to="/blog">Blog</Link></li>
	                    <li><Link to="/projects">Projects</Link></li>
	                  </ul>

	                </div>

	          </nav>

	          <hr/>
	          <div className="container">
	            <div className="row">
	              <div className="box">

	                <ProfileCard/>
	                
	                <Route exact path="/" component={Blog} />
	                <Route path="/blog" component={Blog} />
	                <Route path="/projects" component={Projects} />
	                

	                

	              </div>
	            </div>
	          </div>


	        </div>

		)	
	}
}

export default App;