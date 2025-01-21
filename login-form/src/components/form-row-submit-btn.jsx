import React, { Component } from "react";

class FormRowSubmitBtn extends Component {

     onLoginSubmit = function(){
        let usernameFromForm = document.getElementById("username").value;
        alert('Username : '+usernameFromForm);
      }

    render() {
        
        return <>
            <div class="form-row">
                <div class="submit-btn" onClick={this.onLoginSubmit}>
                    Submit 
                </div>
            </div>
        </>;
    }
}
 
export default FormRowSubmitBtn;
