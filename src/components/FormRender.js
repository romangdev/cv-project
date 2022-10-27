import React from "react";

const FormRender = ({ genInfo, education, experience }) => {
  return(
    <div className="CV">
      <div className="gen-info-cv">
        <h2 className="gen-info-name">{genInfo.name}</h2>
        <div>
          <p>{genInfo.email}</p>
          <p>{genInfo.phone}</p>
        </div>
      </div>
      <div className="education-cv">
        <h2>Education History</h2>
        <div>
          <p><strong>University: </strong> {education[0].schoolName}</p>
          <p><strong>Degree: </strong>{education[0].degreeAchieved}</p>
          <p><strong>Years Attended: </strong>{education[0].dateOfStudy}</p>
        </div>
        {(education[1].schoolName !== '' || education[1].degreeAchieved !== '' || education[1].dateOfStudy !== '') ?
          <div>
            <p><strong>University: </strong> {education[1].schoolName}</p>
            <p><strong>Degree: </strong>{education[1].degreeAchieved}</p>
            <p><strong>Years Attended: </strong>{education[1].dateOfStudy}</p>
          </div>
          :
          <></>
        }
      </div>
      <div className="experience-cv">
        <h2>Work Experience</h2>
        <p><strong>Company Name: </strong>{experience.companyName}</p>
        <p><strong>Position Title: </strong>{experience.positionTitle}</p>
        <p><strong>Main Tasks: </strong>{experience.mainTasks}</p>
        <p><strong>Date Started: </strong>{experience.dateStarted}</p>
        <p><strong>Date Ended: </strong>{experience.dateEnded}</p>
      </div>
    </div>
  );
}

export default FormRender