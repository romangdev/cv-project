import React from "react";

export default class PracticalExperience extends React.Component {
  constructor() {
    super();

    this.state = {
      companyName: '',
      positionTitle: '',
      mainTasks: '',
      dateStarted: '',
      dateEnded: '',
    }
  }

  onChange = (e) => {
    if (e.target.id === 'company-name') {
      this.setState({companyName: e.target.value});
    } else if (e.target.id === 'position-title') {
      this.setState({positionTitle: e.target.value});
    } else if (e.target.id === 'main-tasks') {
      this.setState({mainTasks: e.target.value});
    } else if (e.target.id === 'date-started') {
      this.setState({dateStarted: e.target.value});  
    } else if (e.target.id === 'date-ended') {
      this.setState({dateEnded: e.target.value});
    }
  }

  onSubmit = (e) => {
    this.props.parentCallback(this.state);
    e.preventDefault();
    this.setState({
      companyName: '',
      positionTitle: '',
      mainTasks: '',
      dateStarted: '',
      dateEnded: '',
    });
  }

  onEdit = (e) => {
    this.setState({
      companyName: this.props.parentState.practicalExperience.companyName,
      positionTitle: this.props.parentState.practicalExperience.positionTitle,
      mainTasks: this.props.parentState.practicalExperience.mainTasks,
      dateStarted: this.props.parentState.practicalExperience.dateStarted,
      dateEnded: this.props.parentState.practicalExperience.dateEnded,
    });
  }

  render() {
    const { companyName, positionTitle, mainTasks, dateStarted, dateEnded } = this.state;

    return(
      <div className="form-section">
        <form onSubmit={this.onSubmit}>
          <h2>Work Experience</h2>
          <div>
            <label htmlFor="company-name">Company Name: </label>
            <input type="text" id="company-name" onChange={this.onChange} value={companyName}></input>
          </div>
          <div>
            <label htmlFor="position-title">Position Title: </label>
            <input type="text" id="position-title" onChange={this.onChange} value={positionTitle}></input>
          </div>
          <div>
            <label htmlFor="main-tasks">Main Tasks: </label>
            <input type="text" id="main-tasks" onChange={this.onChange} value={mainTasks}></input>
          </div>
          <div>
            <label htmlFor="date-started">Date Started: </label>
            <input type="text" id="date-started" onChange={this.onChange} value={dateStarted}></input>
          </div>
          <div>
            <label htmlFor="date-ended">Date Ended: </label>
            <input type="text" id="date-ended" onChange={this.onChange} value={dateEnded}></input>
          </div>
          <div>
            <button type="button" onClick={this.onEdit}>Edit</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}