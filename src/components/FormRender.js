import React from "react";

export default class FormRender extends React.Component {

  render() {
    return(
      <div className="CV">
        <div className="gen-info-cv">
          <p className="gen-info-name">{this.props.genInfoArr[0]}</p>
          <div>
            <p>{this.props.genInfoArr[1]}</p>
            <p>{this.props.genInfoArr[2]}</p>
          </div>
        </div>
        <p>{this.props.educationArr[0]}</p>
        <p>{this.props.educationArr[1]}</p>
        <p>{this.props.educationArr[2]}</p>
        <p>{this.props.experienceArr[0]}</p>
        <p>{this.props.experienceArr[1]}</p>
        <p>{this.props.experienceArr[2]}</p>
        <p>{this.props.experienceArr[3]}</p>
        <p>{this.props.experienceArr[4]}</p>
      </div>
    );
  }
}