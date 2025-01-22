import React, { Component } from "react";

import FormLinkRow from "./form-link-row";


class Welcome extends Component {

  render() {
    return (
      <div className="main-content">
        <h1>Welcome</h1>
        <div className='form-content'>
          <FormLinkRow registration="false" login="false" logout="true" forgetPass="false" />
        </div>
      </div>);
  }

}

export default Welcome;
