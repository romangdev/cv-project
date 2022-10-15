import React from "react";

export default class FormRender extends React.Component {

  render() {
    return(
      <div className="CV">
        <div className="gen-info-cv">
          <h2 className="gen-info-name">{this.props.genInfoArr[0]}</h2>
          <div>
            <p>{this.props.genInfoArr[1]}</p>
            <p>{this.props.genInfoArr[2]}</p>
          </div>
        </div>
        <div className="education-cv">
          <h2>Education History</h2>
          <p><strong>University: </strong> {this.props.educationArr[0]}</p>
          <p><strong>Degree: </strong>{this.props.educationArr[1]}</p>
          <p><strong>Years Attended: </strong>{this.props.educationArr[2]}</p>
        </div>
        <div className="experience-cv">
          <h2>Work Experience</h2>
          <p><strong>Company Name: </strong>{this.props.experienceArr[0]}</p>
          <p><strong>Position Title: </strong>{this.props.experienceArr[1]}</p>
          <p><strong>Main Tasks: </strong>{this.props.experienceArr[2]}</p>
          <p><strong>Date Started: </strong>{this.props.experienceArr[3]}</p>
          <p><strong>Date Ended: </strong>{this.props.experienceArr[4]}</p>
        </div>
      </div>
    );
  }
}