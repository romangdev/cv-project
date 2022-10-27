import React from "react";
import EducationForm from "./EducationForm";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from "react";

const Education = ({ parentCallback, parentState }) => {
  const [schoolName, setSchoolName] = useState('')
  const [degreeAchieved, setDegreeAchieved] = useState('')
  const [dateOfStudy, setDateOfStudy] = useState('')
  const [secondForm, setSecondForm] = useState(false)

  const handleChange = (e) => {
    if (e.target.id === 'school-name') {
      setSchoolName(e.target.value)
    } else if (e.target.id === 'degree') {
      setDegreeAchieved(e.target.value)
    } else if (e.target.id === 'date-of-study') {
      setDateOfStudy(e.target.value)  
    }
  }

  const onSubmit = (e) => {
    parentCallback([schoolName, degreeAchieved, dateOfStudy]);
    e.preventDefault();
    setSchoolName('')
    setDegreeAchieved('')
    setDateOfStudy('')
  }

  const onEdit = (e) => {
    setSchoolName(parentState.schoolName)
    setDegreeAchieved(parentState.degreeAchieved)
    setDateOfStudy(parentState.dateOfStudy)
  }

  const addEducationForm = () => {
    setSecondForm(true)
  }
  
  return (
    <div className="form-section">
      <h2>Education History</h2>
      <EducationForm onSubmit={onSubmit} handleChange={handleChange} onEdit={onEdit} schoolName={schoolName}
      degreeAchieved={degreeAchieved} dateOfStudy={dateOfStudy} addForm={addEducationForm} secondForm={secondForm} />
      {secondForm ?
        <EducationForm onSubmit={onSubmit} handleChange={handleChange} onEdit={onEdit} schoolName={schoolName}
        degreeAchieved={degreeAchieved} dateOfStudy={dateOfStudy} addForm={addEducationForm} secondForm={secondForm} />
        :
        <></>
      }
    </div>
  );
}

export default Education