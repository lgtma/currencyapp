import React, { Component } from "react";
import NumberFormat from "react-number-format";

class CurrencyInput extends Component {
  state = {
    _value: this.props.defaultValue
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state._value);
  };

  onInputChange = e => {
    const val = e.target.value.replace("-", "");
    this.setState({ _value: val });
  };

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui header">USD - United States Dollar</div>
          <div className="ui labeled input">
            <div className="ui label orange">USD</div>
            <NumberFormat
              thousandSeparator={true}
              isNumericString={true}
              value={this.state._value}
              placeholder="Type a number to convert"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CurrencyInput;
