import React from "react";
import GeneralInfo from "./GeneralInfo";

export default class FormRender extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="CV">
        <p>{this.props.name}</p>
      </div>
    );
  }
}