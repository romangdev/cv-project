import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import FormRender from "./components/FormRender";
import React from "react";
import PracticalExperience from "./components/PracticalExperience";
import { useState } from 'react'

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const [education, setEducation] = useState([
    {
      schoolName: '',
      degreeAchieved: '',
      dateOfStudy: '',
      id: 1
    },
    {
      schoolName: '',
      degreeAchieved: '',
      dateOfStudy: '',
      id: 2
    },
  ])

  const [practicalExperience, setPracticalExperience] = useState({
    companyName: '',
    positionTitle: '',
    mainTasks: '',
    dateStarted: '',
    dateEnded: '',
  })

  const getChildGeneral= (childGeneralInfo) => {
    setGeneralInfo({
      name: childGeneralInfo[0],
      email: childGeneralInfo[1],
      phone: childGeneralInfo[2]
    })
  }

  const getChildEducation = (childEducation, formNumber) => {
    if (formNumber === 'education-form-one') {
      const educationCopy = education.map(info => {
        if (info.id === 1) {
          return {
            schoolName: childEducation[0],
            degreeAchieved: childEducation[1],
            dateOfStudy: childEducation[2],
            id: 1
          }
        } else {
          return info
        }
      })
      setEducation(educationCopy)

    } else {
      const educationCopy = education.map(info => {
        if (info.id === 2) {
          return {
            schoolName: childEducation[0],
            degreeAchieved: childEducation[1],
            dateOfStudy: childEducation[2],
            id: 2
          }
        } else {
          return info
        }
      })
      setEducation(educationCopy)
    }
  }

  const getChildExperience = (childExperience) => {
    setPracticalExperience({
      companyName: childExperience[0],
      positionTitle: childExperience[1],
      mainTasks: childExperience[2],
      dateStarted: childExperience[3],
      dateEnded: childExperience[4],
    })
  }

  return (
    <div className="App">
      <div className="form-inputs">
        <h1>CV Maker</h1>
        <GeneralInfo parentCallback={getChildGeneral} parentState={generalInfo} />
        <br></br>
        <Education parentCallback={getChildEducation} parentState={education} />
        <br></br>
        <PracticalExperience parentCallback={getChildExperience} parentState={practicalExperience} />
      </div>
      <FormRender genInfo={generalInfo} education={education} experience={practicalExperience} />
    </div>
  );
}

export default App;
