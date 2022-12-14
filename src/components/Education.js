import React from "react";
import EducationForm from "./EducationForm";
import { useState } from "react";

const Education = ({ parentCallback, parentState, parentResetCallback }) => {
  const [schoolNameOne, setSchoolNameOne] = useState('')
  const [degreeAchievedOne, setDegreeAchievedOne] = useState('')
  const [dateOfStudyOne, setDateOfStudyOne] = useState('')
  const [secondForm, setSecondForm] = useState(false)
  const [schoolNameTwo, setSchoolNameTwo] = useState('')
  const [degreeAchievedTwo, setDegreeAchievedTwo] = useState('')
  const [dateOfStudyTwo, setDateOfStudyTwo] = useState('')

  const handleChange = (e) => {
    if (e.target.id === 'school-name-one') {
      setSchoolNameOne(e.target.value)
    } else if (e.target.id === 'degree-one') {
      setDegreeAchievedOne(e.target.value)
    } else if (e.target.id === 'date-of-study-one') {
      setDateOfStudyOne(e.target.value)  
    }

    if (e.target.id === 'school-name-two') {
      setSchoolNameTwo(e.target.value)
    } else if (e.target.id === 'degree-two') {
      setDegreeAchievedTwo(e.target.value)
    } else if (e.target.id === 'date-of-study-two') {
      setDateOfStudyTwo(e.target.value)  
    }
  }

  const onSubmit = (e) => {
    const formNumber = e.target.className
    if (e.target.className === 'education-form-one') {
      parentCallback([schoolNameOne, degreeAchievedOne, dateOfStudyOne], formNumber);
      e.preventDefault();
      setSchoolNameOne('')
      setDegreeAchievedOne('')
      setDateOfStudyOne('')
    } else {
      parentCallback([schoolNameTwo, degreeAchievedTwo, dateOfStudyTwo], formNumber);
      e.preventDefault();
      setSchoolNameTwo('')
      setDegreeAchievedTwo('')
      setDateOfStudyTwo('')
    }
  }

  const onEdit = (e) => {
    if (e.target.className.includes('education-edit-one')) {
      setSchoolNameOne(parentState[0].schoolName)
      setDegreeAchievedOne(parentState[0].degreeAchieved)
      setDateOfStudyOne(parentState[0].dateOfStudy)
    } else {
      setSchoolNameTwo(parentState[1].schoolName)
      setDegreeAchievedTwo(parentState[1].degreeAchieved)
      setDateOfStudyTwo(parentState[1].dateOfStudy)
    }
  }

  const addEducationForm = () => {
    setSecondForm(true)
  }

  const removeEducationForm = () => {
    setSecondForm(false)
    parentResetCallback()
  }
  
  return (
    <div className="form-section">
      <h2>Education History</h2>
      <EducationForm onSubmit={onSubmit} handleChange={handleChange} onEdit={onEdit} schoolName={schoolNameOne}
      degreeAchieved={degreeAchievedOne} dateOfStudy={dateOfStudyOne} addForm={addEducationForm} secondForm={secondForm}
      formTwo={false} editClass={'education-edit-one'} />
      {secondForm ?
        <EducationForm onSubmit={onSubmit} handleChange={handleChange} onEdit={onEdit} schoolName={schoolNameTwo}
        degreeAchieved={degreeAchievedTwo} dateOfStudy={dateOfStudyTwo} secondForm={secondForm} removeForm={removeEducationForm}
        formTwo={true} editClass={'education-edit-two'} />
        :
        <></>
      }
    </div>
  );
}

export default Education