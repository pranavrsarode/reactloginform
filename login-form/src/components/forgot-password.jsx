import React, { Component } from "react";
import { Link } from "react-router-dom";

import FormInputRow from "./form-input-row";
import FormRowSubmitBtn from "./form-row-submit-btn";

class ForgetPassword extends Component {

  render() {
    return (
      <div className="main-content">
        <h1>Forget Password</h1>
        <div className='form-content'>
          <FormInputRow nameId="email" label="Email" inputType="text" />
          <FormInputRow nameId="newpassword" label="New Password" inputType="password" />
          <FormRowSubmitBtn />
          <Link to="/">Login</Link>
        </div>
      </div>);
  }

}

export default ForgetPassword;
