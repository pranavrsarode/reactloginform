import React, { Component } from "react";

class FormRowSubmitBtn extends Component {

     onLoginSubmit = function(){
        let usernameFromForm = document.getElementById("username").value;
        alert('Username : '+usernameFromForm);
      }

    render() {
        
        return <>
            <div className="form-row">
            <div className="submit-btn" onClick={() => this.props.onClickHandler}>
                    Submit 
                </div>
            </div>
        </>;
    }
}
 
export default FormRowSubmitBtn;
