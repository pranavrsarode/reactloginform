import React, { Component } from "react";
import { Link } from "react-router-dom";

import FormInputRow from './form-input-row';
import FormRowSubmitBtn from './form-row-submit-btn';
import Header from './header';

class LoginForm extends Component {
    render() {

        return <>
            <div className="main-content">
                <Header />
                <div className='form-content'>
                    <FormInputRow nameId="username" label="Username" inputType="text" />
                    <FormInputRow nameId="password" label="Password" inputType="password" />
                    <FormRowSubmitBtn />
                    <Link to="/forget">Forget Password</Link>
                    <Link to="/registration">Registration</Link>
                </div>
            </div>
        </>;
    }
}

export default LoginForm;

