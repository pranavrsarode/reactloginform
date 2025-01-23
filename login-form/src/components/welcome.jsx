import React, { Component } from "react";
import FormLinkRow from "./form-link-row";


class Welcome extends Component {

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <FormLinkRow registration="false" login="false" logout="true" forgetPass="false" />
      </div>);
  }
}

export default Welcome;
