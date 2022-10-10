import React from "react";

export default class Education extends React.Component {
  constructor() {
    super();

    this.state = {
      schoolName: '',
      degreeAchieved: '',
      dateOfStudy: '',
    }
  }

  handleChange = (e) => {
    if (e.target.id === 'school-name') {
      this.setState({schoolName: e.target.value});
    } else if (e.target.id === 'degree') {
      this.setState({degreeAchieved: e.target.value});
    } else if (e.target.id === 'date-of-study') {
      this.setState({dateOfStudy: e.target.value});  
    }
  }

  onSubmit = (e) => {
    this.props.parentCallback(this.state);
    e.preventDefault();
    this.setState({
      schoolName: '',
      degreeAchieved: '',
      dateOfStudy: '',
    });
  }

  render() {
    const { schoolName, degreeAchieved, dateOfStudy } = this.state;

    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="school-name">School Name: </label>
          <input type="text" id="school-name" onChange={this.handleChange} value={schoolName}></input>
          <label htmlFor="degree">Degree Achieved: </label>
          <input type="text" id="degree" onChange={this.handleChange} value={degreeAchieved}></input>
          <label htmlFor="date-of-study">Date of Study: </label>
          <input type="text" id="date-of-study" onChange={this.handleChange} value={dateOfStudy}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}