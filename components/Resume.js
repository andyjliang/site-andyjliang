import React, { Component } from 'react';

class ResumeSection extends Component {
	constructor(props) {
		super(props);
	}
	generateBullets(bullets) {
	 	return((bullets) ?
			bullets.map((bulletText) => (
				<p className="tiny-text"> • {bulletText}</p>
			)) : "")
	}
	generateProjects(projects) {
		return((projects) ? 
			projects.map((project) => {

				return (

					<div className="resume-project">

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
			entries.map((entry) => (
				<div> 

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
			chart.map((bar) => (
				<div className="bar">
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
					entrySubHeader: "Software Engineer • San Jose, CA",
					entryProjects: [
						{
							projectTitle: "Form Designer",
							projectTime: "Apr 2015 – present",
							projectBullets: [
								"Central-to-product Data Form designer: creating & editing forms in sleek, intuitive UI"
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
							percentage: "95%"
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

		let volunteer = {
			sectionHeader: "Volunteer",
			entries: [
				{
					entryHeader: "Bridgemen",
					entryTime: "2016 - 2017",
					entrySubHeader: "San Francisco CA",
					entryBullets: [
						"public projects e.g. workshops for low-income kids/families, soup kitchen, hosting HIV/AIDS testing"
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

				{/* VOLUNTEER */}

					<ResumeSection {...volunteer}/>

			</div>
		)
	}	
}
export default Resume;
