import React, { Component } from "react";

import FormInputRow from "./form-input-row";
import FormRowSubmitBtn from "./form-row-submit-btn";
import FormLinkRow from "./form-link-row";

class ForgetPassword extends Component {

  render() {
    return (
      <div className="main-content">
        <h1>Forget Password</h1>
        <div className='form-content'>
          <FormInputRow nameId="email" label="Email" inputType="text" />
          <FormInputRow nameId="newpassword" label="New Password" inputType="password" />
          <FormRowSubmitBtn />
          <FormLinkRow registration="true" login="true" logout="false" forgetPass="fasle"/>
        </div>
      </div>);
  }

}

export default ForgetPassword;
