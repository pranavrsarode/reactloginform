import React, { Component } from "react";
import { Link } from "react-router-dom";

class FormLinkRow extends Component {

    render() {
        return <>
            <div className="form-row">
                {
                    this.props.forgetPass == 'true' ? <Link to="/forget" className="form-row-link">Forget Password</Link> : null
                }
                {
                    this.props.registration == 'true' ? <Link to="/registration" className="form-row-link">Registration</Link> : null
                }
                {
                    this.props.login == 'true' ? <Link to="/" className="form-row-link">Login</Link> : null
                }
                {
                    this.props.logout == 'true' ? <Link to="/" className="form-row-link">Logout</Link> : null
                }
            </div>
        </>;
    }
}

export default FormLinkRow;
