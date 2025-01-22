import React, { Component } from "react";

import FormInputRow from "./form-input-row";
import FormRowSubmitBtn from "./form-row-submit-btn";
import FormLinkRow from "./form-link-row";
class Registration extends Component {

  render() {
    return (
      <div className="main-content">
        <h1>Registration</h1>
        <div className='form-content'>
          <FormInputRow nameId="name" label="Name" inputType="text" />
          <FormInputRow nameId="email" label="Email" inputType="text" />

          <FormInputRow nameId="username" label="Username" inputType="text" />
          <FormInputRow nameId="password" label="Password" inputType="password" />

          <FormRowSubmitBtn />
          <FormLinkRow registration="false" login="true" logout="false" forgetPass="false"/>
        </div>
      </div>);
  }

}

export default Registration;
