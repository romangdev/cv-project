import React from "react";

export default class GeneralInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: '',
    };
  }

  handleChange = (e) => {
    if (e.target.id === "name") {
      this.setState({
        name: e.target.value,
      });
    } else if (e.target.id === "email") {
      this.setState({
        email: e.target.value,
      });
    } else if (e.target.id === "phone") {
      this.setState({
        phone: e.target.value,
      });
    } 
  }

  onFormSubmit = (e) => {
    this.props.parentCallback(this.state);
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      phone: '',
    })
  }

  onEdit = (e) => {
    this.setState({
      name: this.props.parentState.generalInfo.name,
      email: this.props.parentState.generalInfo.email,
      phone: this.props.parentState.generalInfo.phone,
    });
  }

  render() {
    const { name, email, phone } = this.state;

    return(
      <div className="form-section">
        <form onSubmit={this.onFormSubmit}>
          <h2>General Information</h2>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" onChange={this.handleChange} value={name}></input>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" onChange={this.handleChange} value={email}></input>
          </div>
          <div>
            <label htmlFor="phone">Phone Number: </label>
            <input type="phone" id="phone" onChange={this.handleChange} value={phone}></input>
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