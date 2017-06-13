import React, { Component } from 'react';

const ResumeSection = (prop) => (

	<div className="col-lg-8 entry">

		<div className="col-md-3 resume-section-header">

			<h3>
				<span className="resume-section-header-font">{prop.section.sectionHeader}</span>
			</h3>

	    </div>

	    <div className="col-md-8">

	    	<div>

		    	<h3 className="resume-section">
		    		<span className="resume-header-font">{prop.section.entryHeader}</span>
		    		<span className="resume-header-font-slash">/</span>
		    	</h3>

		    	<p className="resume-section">{prop.section.entryTime}</p>

		    </div>	

	    	<p>{prop.section.entrySubHeader}</p>

	    </div>

	</div>
)

class Resume extends Component {
	constructor(props) {
		super(props);
	}
	render() {

		let education = {
			sectionHeader: "Research",
			entryHeader: "MIT",
			entryTime: "Graduated 2014",
			entrySubHeader: "GPA 4.5 • B.S. in Brain Cognitive Sciences • Cambridge, MA"
		}

		let work = {
			sectionHeader: "Work",
			entryHeader: "Oracle",
			entryTime: "Aug 2014 - Present",
			entrySubHeader: "Software Engineer • San Jose, CA"
		}

		let research = {
			sectionHeader: "Research",
			entryHeader: "Tomaso Poggio Lab",
			entryTime: "2012 - 2014",
			entrySubHeader: "MIT CS Artifical Intelligence Lab • Cambridge, MA"
		}

		return (

			<div>

					<h2> 
						<span className="content-header">Resume</span>
					</h2>

				{/* EDUCATION */}

					<ResumeSection section={education}/>

				{/* WORK */}

					<ResumeSection section={work}/>

				{/* LABORATORY EXPERIENCE */}

					<ResumeSection section={research}/>

			</div>
		)
	}	
}
export default Resume;
