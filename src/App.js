import GeneralInfo from "./components/GeneralInfo";
import FormRender from "./components/FormRender";
import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: '',
    };
  }

  handleCallback = (childGeneralInfo) => {
    console.log(childGeneralInfo);
    this.setState({
      name: childGeneralInfo.name,
      email: childGeneralInfo.email,
      phone: childGeneralInfo.phone
    });

    console.log(`PARENT ${childGeneralInfo.name}`);
  }

  render() {
    return (
      <div className="App">
        <GeneralInfo parentCallback={this.handleCallback}/>
        <FormRender name="d" />
      </div>
    );
  }
}

export default App;
