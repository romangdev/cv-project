import React from "react";
import InfoInput from "./InfoInput";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from "react";

const PracticalExperience = ({ parentCallback, parentState }) => {
  const [companyName, setCompanyName] = useState('')
  const [positionTitle, setPositionTitle] = useState('')
  const [mainTasks, setMainTasks] = useState('')
  const [dateStarted, setDateStarted] = useState('')
  const [dateEnded, setDateEnded] = useState('')

  const onChange = (e) => {
    if (e.target.id === 'company-name') {
      setCompanyName(e.target.value)
    } else if (e.target.id === 'position-title') {
      setPositionTitle(e.target.value)
    } else if (e.target.id === 'main-tasks') {
      setMainTasks(e.target.value)
    } else if (e.target.id === 'date-started') {
      setDateStarted(e.target.value) 
    } else if (e.target.id === 'date-ended') {
      setDateEnded(e.target.value)
    }
  }

  const onSubmit = (e) => {
    parentCallback([companyName, positionTitle, mainTasks, dateStarted, dateEnded]);
    e.preventDefault();
    setCompanyName('')
    setPositionTitle('')
    setMainTasks('')
    setDateStarted('') 
    setDateEnded('')
  }

  const onEdit = (e) => {
    setCompanyName(parentState.companyName)
    setPositionTitle(parentState.positionTitle)
    setMainTasks(parentState.mainTasks)
    setDateStarted(parentState.dateStarted) 
    setDateEnded(parentState.dateEnded)
  }

  return (
    <div className="form-section">
      <form onSubmit={onSubmit}>
        <h2>Work Experience</h2>
        <InfoInput id={'company-name'} label={'Company Name: '} onChange={onChange} value={companyName} />
        <InfoInput id={'position-title'} label={'Position Title: '} onChange={onChange} value={positionTitle} />
        <InfoInput id={'main-tasks'} label={'Main Tasks: '} onChange={onChange} value={mainTasks} />
        <InfoInput id={'date-started'} label={'Start Date: '} onChange={onChange} value={dateStarted} />
        <InfoInput id={'date-ended'} label={'End Date: '} onChange={onChange} value={dateEnded} />
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={onEdit}>Edit</Button>
          <Button variant="contained" type="submit">Submit</Button>
        </Stack>
      </form>
    </div>
  );
}

export default PracticalExperience