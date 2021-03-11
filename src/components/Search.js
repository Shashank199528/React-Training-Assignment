import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="mb-3">
        <label>{this.props.name}</label>
        <input
          type={this.props.type}
          value={this.props.value}
          className="form-control"
          placeholder={this.props.name}
          onChange={(value) => this.props.searchProduct(value)}
        />
      </div>
    );
  }
}

export default Search;
