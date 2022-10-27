import InfoInput from "./InfoInput";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const EducationForm = ({ onSubmit, handleChange, onEdit, schoolName, degreeAchieved, dateOfStudy, addForm, secondForm }) => {
  return (
    <form onSubmit={onSubmit}>
      <InfoInput id={'school-name'} label={'School Name: '} onChange={handleChange} value={schoolName} />
      <InfoInput id={'degree'} label={'Degree Achieved: '} onChange={handleChange} value={degreeAchieved} />
      <InfoInput id={'date-of-study'} label={'Dates of Study: '} onChange={handleChange} value={dateOfStudy} />
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={onEdit}>Edit</Button>
        <Button variant="contained" type="submit">Submit</Button>
        {secondForm ?
          <></>
          :
          <Button variant="contained" onClick={addForm}>Add</Button>
        }
      </Stack>
    </form>
  )
}

export default EducationForm