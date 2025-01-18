import React, { Component } from "react";
class FormInputRow extends Component {
    msg = "Johnny Bravo";
    render() {
        return <>
            <div class="form-row">
                <div class="form-row-label">
                    <label for={this.props.nameId}> {this.props.label} </label>
                </div>
                <div class="form-row-input">
                    <input value={this.msg} type={this.props.inputType} id={this.props.nameId} name={this.props.nameId} class="input-max-width-500px" />
                </div>
            </div>
        </>;
    }
}

export default FormInputRow;