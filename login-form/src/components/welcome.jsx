import React, { Component } from "react";
import { Link } from "react-router-dom";


class Welcome extends Component {

  render() {
    return (
      <div className="main-content">
        <h1>Welcome</h1>
        <div className='form-content'>

          <Link to="/">Logout</Link>
        </div>
      </div>);
  }

}

export default Welcome;
