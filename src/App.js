import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import FormRender from "./components/FormRender";
import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        name: '',
        email: '',
        phone: '',
      },
      education: {
        schoolName: '',
        degreeAchieved: '',
        dateOfStudy: '',
      },
    };
  }

  getChildGeneral= (childGeneralInfo) => {
    this.setState({
      generalInfo: {
        name: childGeneralInfo.name,
        email: childGeneralInfo.email,
        phone: childGeneralInfo.phone
      }
    });
  }

  getChildEducation = (childEducation) => {
    this.setState({
      education: {
        schoolName: childEducation.schoolName,
        degreeAchieved: childEducation.degreeAchieved,
        dateOfStudy: childEducation.dateOfStudy,
      }
    });
  }

  render() {
    return (
      <div className="App">
        <GeneralInfo parentCallback={this.getChildGeneral} />
        <Education parentCallback={this.getChildEducation} />
        <FormRender name={this.state.generalInfo.name} email={this.state.generalInfo.email} phone={this.state.generalInfo.phone} 
        school={this.state.education.schoolName} degree={this.state.education.degreeAchieved} dates={this.state.education.dateOfStudy}/>
      </div>
    );
  }
}

export default App;
