import React from "react";
import GeneralInfo from "./GeneralInfo";

export default class FormRender extends React.Component {

  render() {
    return(
      <div className="CV">
        <p>{this.props.name}</p>
        <p>{this.props.email}</p>
        <p>{this.props.phone}</p>
        <p>{this.props.school}</p>
        <p>{this.props.degree}</p>
        <p>{this.props.dates}</p>
      </div>
    );
  }
}