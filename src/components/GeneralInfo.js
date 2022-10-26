import React from "react";
import Button from '@mui/material/Button';
import InfoInput from './InfoInput'
import Stack from '@mui/material/Stack';
import { useState } from "react";

const GeneralInfo = ({ parentCallback, parentState }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value)
    } else if (e.target.id === "email") {
      setEmail(e.target.value)
    } else if (e.target.id === "phone") {
      setPhone(e.target.value)
    } 
  }

  const onFormSubmit = (e) => {
    parentCallback([name, email, phone]);
    e.preventDefault();
    setName('')
    setEmail('')
    setPhone('')
  }

  const onEdit = (e) => {
    setName(parentState.name)
    setEmail(parentState.email)
    setPhone(parentState.phone)
  }

  return(
    <div className="form-section">
      <form onSubmit={onFormSubmit}>
        <h2>General Information</h2>
        <InfoInput id={'name'} label={'Name: '} onChange={handleChange} value={name} />
        <InfoInput id={'email'} label={'Email: '} onChange={handleChange} value={email} />
        <InfoInput id={'phone'} label={'Phone Number: '} onChange={handleChange} value={phone} />
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={onEdit}>Edit</Button>
          <Button variant="contained" type="submit">Submit</Button>
        </Stack>
      </form>
    </div>
  );
}

export default GeneralInfo