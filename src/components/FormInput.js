import React from "react";

// class component example
class FormInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="mb-3">
        <label>{this.props.name}</label>
        <input
          type={this.props.type}
          className="form-control"
          name={this.props.name}
          placeholder={this.props.name}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default FormInput;
