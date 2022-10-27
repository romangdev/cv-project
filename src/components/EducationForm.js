import InfoInput from "./InfoInput";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const EducationForm = ({ onSubmit, handleChange, onEdit, schoolName, degreeAchieved, dateOfStudy, 
  addForm, secondForm, formTwo}) => {
  return (
    <form onSubmit={onSubmit} className={formTwo ? 'education-form-two' : 'education-form-one'}>
      {formTwo ?
        <InfoInput id={'school-name-two'} label={'School Name: '} onChange={handleChange} value={schoolName} />
        :
        <InfoInput id={'school-name-one'} label={'School Name: '} onChange={handleChange} value={schoolName} />
      }
      {formTwo ?
        <InfoInput id={'degree-two'} label={'Degree Achieved: '} onChange={handleChange} value={degreeAchieved} />
        :
        <InfoInput id={'degree-one'} label={'Degree Achieved: '} onChange={handleChange} value={degreeAchieved} />
      }
      {formTwo ?
        <InfoInput id={'date-of-study-two'} label={'Dates of Study: '} onChange={handleChange} value={dateOfStudy} />
        :
        <InfoInput id={'date-of-study-one'} label={'Dates of Study: '} onChange={handleChange} value={dateOfStudy} />
      }
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