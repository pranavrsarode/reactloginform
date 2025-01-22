import React, { Component } from "react";

class FormRowSubmitBtn extends Component {
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
