import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import FormRender from "./components/FormRender";
import React from "react";
import PracticalExperience from "./components/PracticalExperience";

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
      practicalExperience: {
        companyName: '',
        positionTitle: '',
        mainTasks: '',
        dateStarted: '',
        dateEnded: '',
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

  getChildExperience = (childExperience) => {
    this.setState({
      practicalExperience: {
        companyName: childExperience.companyName,
        positionTitle: childExperience.positionTitle,
        mainTasks: childExperience.mainTasks,
        dateStarted: childExperience.dateStarted,
        dateEnded: childExperience.dateEnded,
      }
    })
  }

  returnGenInfoArr = () => {
    const { name, email, phone } = this.state.generalInfo;
    return [name, email, phone];
  }

  returnEducationArr = () => {
    const { schoolName, degreeAchieved, dateOfStudy } = this.state.education;
    return [schoolName, degreeAchieved, dateOfStudy];
  }

  returnExperienceArr = () => {
    const { companyName, positionTitle, mainTasks, dateStarted, dateEnded } = this.state.practicalExperience;
    return [companyName, positionTitle, mainTasks, dateStarted, dateEnded];
  }

  render() {
    return (
      <div className="App">
        <div className="form-inputs">
          <h1>CV Maker</h1>
          <GeneralInfo parentCallback={this.getChildGeneral} parentState={this.state} />
          <br></br>
          <Education parentCallback={this.getChildEducation} parentState={this.state} />
          <br></br>
          <PracticalExperience parentCallback={this.getChildExperience} parentState={this.state} />
        </div>
        <FormRender genInfoArr={this.returnGenInfoArr()} educationArr={this.returnEducationArr()}
        experienceArr={this.returnExperienceArr()} />
      </div>
    );
  }
}

export default App;
