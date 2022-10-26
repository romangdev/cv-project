import React from "react";
import InfoInput from "./InfoInput";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from "react";

const Education = ({ parentCallback, parentState }) => {
  const [schoolName, setSchoolName] = useState('')
  const [degreeAchieved, setDegreeAchieved] = useState('')
  const [dateOfStudy, setDateOfStudy] = useState('')

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

  return(
    <div className="form-section">
      <form onSubmit={onSubmit}>
        <h2>Education History</h2>
        <InfoInput id={'school-name'} label={'School Name: '} onChange={handleChange} value={schoolName} />
        <InfoInput id={'degree'} label={'Degree Achieved: '} onChange={handleChange} value={degreeAchieved} />
        <InfoInput id={'date-of-study'} label={'Dates of Study: '} onChange={handleChange} value={dateOfStudy} />
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={onEdit}>Edit</Button>
          <Button variant="contained" type="submit">Submit</Button>
        </Stack>
      </form>
    </div>
  );
}

export default Education