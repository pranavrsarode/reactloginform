import React, { Component } from "react";
import { Link } from "react-router-dom";


class ForgetPassword extends Component {

  render() {
    return (
      <div>
        <h1>Forget Password</h1>
        <Link to="/">Login</Link>
      </div>);
  }

}

export default ForgetPassword;
