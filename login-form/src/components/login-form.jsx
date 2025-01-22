import React, { Component } from "react";

import FormInputRow from './form-input-row';
import FormRowSubmitBtn from './form-row-submit-btn';
import Header from './header';
import FormLinkRow from "./form-link-row";

class LoginForm extends Component {
    render() {

        return <>
            <div className="main-content">
                <h1>Login Form</h1>
                <div className='form-content'>
                    <FormInputRow nameId="username" label="Username" inputType="text" />
                    <FormInputRow nameId="password" label="Password" inputType="password" />
                    <FormRowSubmitBtn />
                    
                    <FormLinkRow registration="true" login="false" logout="false" forgetPass="true"/>
                </div>
            </div>
        </>;
    }
}

export default LoginForm;

