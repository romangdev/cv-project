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

    console.log(this.state.name);
  }

  render() {
    const { name, email, phone } = this.state;

    return(
      <div className="general-info">
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={this.handleChange} value={name}></input>

          <label htmlFor="email">Email: </label>
          <input type="email" id="email" onChange={this.handleChange} value={email}></input>

          <label htmlFor="phone">Phone Number: </label>
          <input type="phone" id="phone" onChange={this.handleChange} value={phone}></input>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}