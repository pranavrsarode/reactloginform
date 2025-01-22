import React, { Component } from "react";
import { Link } from "react-router-dom";

import FormInputRow from "./form-input-row";
import FormRowSubmitBtn from "./form-row-submit-btn";
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
        </div>
        <Link to="/">Login</Link>
      </div>);
  }

}

export default Registration;
