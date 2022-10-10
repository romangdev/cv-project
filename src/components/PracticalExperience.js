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

  render() {
    const { companyName, positionTitle, mainTasks, dateStarted, dateEnded } = this.state;

    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="company-name">Company Name: </label>
          <input type="text" id="company-name" onChange={this.onChange} value={companyName}></input>
          <label htmlFor="position-title">Position Title: </label>
          <input type="text" id="position-title" onChange={this.onChange} value={positionTitle}></input>
          <label htmlFor="main-tasks">Main Tasks: </label>
          <input type="text" id="main-tasks" onChange={this.onChange} value={mainTasks}></input>
          <label htmlFor="date-started">Date Started: </label>
          <input type="text" id="date-started" onChange={this.onChange} value={dateStarted}></input>
          <label htmlFor="date-ended">Date Ended: </label>
          <input type="text" id="date-ended" onChange={this.onChange} value={dateEnded}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}