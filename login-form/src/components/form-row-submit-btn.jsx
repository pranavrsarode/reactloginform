import React, { Component } from "react";

class FormRowSubmitBtn extends Component {
     onLoginSubmit : {
        console.log(document.getElementById("username"));
        alert('Response Submitted');
      },
    render() {
        
        return <>
            <div class="form-row">
                <div class="submit-btn" onClick={onLoginSubmit()}>
                    Submit 
                </div>
            </div>
        </>;
    }
}
 
export default FormRowSubmitBtn;
