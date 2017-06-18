import React, { Component } from 'react';

class ResumeSection extends Component {
	constructor(props) {
		super(props);
	}
	generateBullets(bullets) {
	 	return((bullets) ?
			bullets.map((bulletText, index) => (
				<p key={index} className="tiny-text"> • {bulletText}</p>
			)) : "")
	}
	generateProjects(projects) {
		return((projects) ? 
			projects.map((project, index) => {

				return (

					<div key={index} className="resume-project">

				    	<div className="resume-project-header"> 

				    		<h4 className="resume-section">
					    		<span className="resume-header-font">{project.projectTitle}</span>
					    		<span className="resume-header-font-slash">/</span>
					    	</h4>

					    	<p className="resume-section">{project.projectTime}</p>

				    	</div>

				    	{this.generateBullets(project.projectBullets)}

			    	</div>
			    )
			}) : "")
	}
	generateEntries(entries) {
		return ((entries) ? 
			entries.map((entry, index) => (
				<div key={index}> 

					<div>

				    	<h3 className="resume-section">
				    		<span className="resume-header-font">{entry.entryHeader}</span>
				    		<span className="resume-header-font-slash">/</span>
				    	</h3>

				    	<p className="resume-section">{entry.entryTime}</p>

				    </div>	

			    	<p>{entry.entrySubHeader}</p>

			    	{this.generateBullets(entry.entryBullets)}

			    	{this.generateProjects(entry.entryProjects)}

			    	{this.generateSkillChart(entry.chart)}

			    </div>
			)) : "")
	}
	generateSkillChart(chart) {
		return ((chart) ?
			chart.map((bar, index) => (
				<div key={index} className="bar">
					<span className="bar-level" style={{width : bar.percentage}}></span>
					<em>{bar.name}</em>
				</div>
			)) : "")
	}
	render() {

		let sectionHeader = this.props.sectionHeader 
		let entries = this.props.entries

		return (
			<div className="col-lg-8 entry">

				<div className="col-md-3 resume-section-header">

					<h3>
						<span className="resume-section-header-font">{sectionHeader}</span>
					</h3>

			    </div>

			    <div className="col-md-9">

			    	{this.generateEntries(this.props.entries)}

			    </div>

			</div>
		)
	}
}

class Resume extends Component {
	constructor(props) {
		super(props);
	}
	render() {

		let education = {
			sectionHeader: "Education",
			entries: [
				{
					entryHeader: "MIT",
					entryTime: "Graduated 2014",
					entrySubHeader: "GPA 4.5 • B.S. in Brain Cognitive Sciences • Cambridge, MA"
				}
			]
		}

		let work = {
			sectionHeader: "Work",
			entries: [
				{
					entryHeader: "Oracle",
					entryTime: "Aug 2014 - Present",
					entrySubHeader: "Software Engineer • Hyperion Planning • San Jose, CA",
					entryProjects: [
						{
							projectTitle: "Adhoc Form Designer",
							projectTime: "Apr 2015 – present",
							projectBullets: [
								"Central-to-product designer: move to stateless, as application scale in end-user numbers",
								"One-time RESTful calls to Oracle Essbase database, by using KnockoutJS data-binds to DOMs",
								"Imposed strict prototypical inheritance, with one-way data flow on MVC",
								"Giving definitive advantage over financial planning competitors on performance & UX"
							]
						},
						{
							projectTitle: "Grid Interface",
							projectTime: "Nov 2014 – present",
							projectBullets: [
								"Developed grid feature used among 4 groups: Strategic Finance, Modeller, Smartform, & Planning",
								"Published model data structures with data-on-DOM to reflect MVC, as grid rerenders often",
								"Employed functionalized programming, and TDD lifecycle using QUnit for ease-of-testing",
								"Published APIs,  authored documentation & FAQs, guiding developers through use & debugging"
							]
						},
						{
							projectTitle: "Jetified Templates ",
							projectTime: "Jan 2015 – Aug 2016",
							projectBullets: [
								"Built reusable layout templates in Oracle JET for quick starts & UI components to customize",
								"Optimized critical rendering path by resource preloading using RequireJS & network profiling"
							]
						}
					]
				}
			]
		}

		let skills = {
			sectionHeader: "Skills",
			entries: [
				{
					entryHeader: "Coding Languages",
					entryTime: "",
					entrySubHeader: "",
					chart: [
						{
							name: "JavaScript",
							percentage: "100%"
						},
						{
							name: "Python",
							percentage: "75%"
						},
						{
							name: "Java",
							percentage: "75%"
						},
						{
							name: "PHP",
							percentage: "55%"
						}
					]
				},
				{
					entryHeader: "Web Frameworks",
					entryTime: "",
					entrySubHeader: "",
					chart: [
						{
							name: "React JS",
							percentage: "80%"
						},

						{
							name: "Knockout JS",
							percentage: "80%"
						},
						{
							name: "Angular JS",
							percentage: "50%"
						},
						{
							name: "Flask",
							percentage: "70%"
						},
						{
							name: "Oracle ADF",
							percentage: "65%"
						}
					]
				},
				{
					entryHeader: "Scripting Languages",
					entryTime: "",
					entrySubHeader: "",	
					chart: [
						{
							name: "Matlab",
							percentage: "85%"
						},
						{
							name: "R",
							percentage: "45%"
						},
						{
							name: "LaTeX",
							percentage: "65%"
						}
					]
				}
			]
		}

		let research = {
			sectionHeader: "Research",
			entries: [
				{
					entryHeader: "Tomaso Poggio Lab",
					entryTime: "2012 - 2014",
					entrySubHeader: "MIT CS Artifical Intelligence Lab • Cambridge, MA",
					entryBullets: [
						"Pattern classifiers (machine learning) for accuracy-speed neural population decoding",
						"Calculated lowest noise correlations using feature selections & cross-validations",
						"Identified pathways within hierarchical attention model of Macaque monkeys"
					]
				},
				{
					entryHeader: "Logothetis Lab",
					entryTime: "Summer 2013",
					entrySubHeader: "Max Planck Institute ​of Biological Cybernetics • Tuebingen, Germany",
					entryBullets: [
						"Examined noise correlations on binocular rivalry via performance encoding",
						"Collected Fisher information to investigate neuron pool discriminability"
					]
				},
				{
					entryHeader: "Pritchard Lab",
					entryTime: "2011 - 2012",
					entrySubHeader: "Research Laboratory of Electronics • Cambridge, MA",
					entryBullets: [
						"Assistant instructor for Classical Mechanics in the Integrated Online Environment",
						"Coded in LaTeX physics problems for launched teaching platform Lon-Capa"
					]
				}
			]
		}

		let thisWebsite = {
			sectionHeader: "Website",
			entries: [
				{
					entryHeader: "About This Site",
					entryTime: "",
					entrySubHeader: "",
					entryBullets: [
						"Full stack web app featuring served blog & interactive resume using RESTful API calls",
						"Implemented with MERN stack, following React + Redux data-flow design pattern",
						"Hosted on Heroku, database backed on mLab MongoDB, deployed using ExpressJS",
						"Optimized with React-Router, NPM axios for promise handling, automated with Gulp"
					]
				}	
			]		
		}

		let volunteer = {
			sectionHeader: "Collaborations",
			entries: [
				{
					entryHeader: "Hack for LA",
					entryTime: "Mar 2016 – Present",
					entrySubHeader: "Project: Adopt-Civic-Art • Los Angeles CA",
					entryBullets: [
						"Web app using public city data of murals around Los Angeles for users to ‘adopt’ the art",
						"Wrote CRUD/serializations endpoints using routes to serve back page templates using Flask",
						"Used ORM SQLAlchemy to map schemas & process queries back to MySQL database",
						"Worked with UX team to draw the backend schemas, determine wireframes, & dictate tech-stack"
					]
				}	
			]		
		}


		return (

			<div>

					<h2> 
						<span className="content-header">Resume</span>
					</h2>

				{/* EDUCATION */}

					<ResumeSection {...education}/>

				{/* WORK */}

					<ResumeSection {...work}/>

				{/* RESUME */}

					<ResumeSection {...skills}/>

				{/* LABORATORY EXPERIENCE */}

					<ResumeSection {...research}/>

				{/* ABOUT THIS WEBSITE */}

					<ResumeSection {...thisWebsite}/>

				{/* VOLUNTEER */}

					<ResumeSection {...volunteer}/>

			</div>
		)
	}	
}
export default Resume;
