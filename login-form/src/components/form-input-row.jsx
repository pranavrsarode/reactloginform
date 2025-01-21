import React, { Component } from "react";
class FormInputRow extends Component {
    
    render() {
        return <>
            <div className="form-row">
                <div className="form-row-label">
                    <label htmlFor={this.props.nameId}> {this.props.label} </label>
                </div>
                <div className="form-row-input">
                    <input type={this.props.inputType} id={this.props.nameId} name={this.props.nameId} className="input-max-width-500px" />
                </div>
            </div>
        </>;
    }
}

export default FormInputRow;
