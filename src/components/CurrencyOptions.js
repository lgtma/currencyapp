import React from "react";

import { currencyName } from "../helpers";

class CurrencyOptions extends React.Component {
  state = {
    _selectValue: null
  };

  onSelectChange = e => {
    this.setState({ _selectValue: e.target.value });
  };

  render() {
    const options = this.props.options;
    const renderOptions = Object.keys(options)
      .sort()
      .map(key => {
        const optValue = currencyName(key);
        return (
          <option key={key} value={key}>
            {key} - {optValue}
          </option>
        );
      });

    return (
      <div className="ui form" style={{ marginTop: "1rem" }}>
        <div className="inline fields">
          <div className="field" style={{ marginBottom: "1rem" }}>
            <select className="ui dropdown" onChange={this.onSelectChange}>
              <option value="">Select Currency</option>
              {renderOptions}
            </select>
          </div>
          <div className="field" style={{ marginBottom: "1rem" }}>
            <button
              className="ui button"
              onClick={() => this.props.onItemSelect(this.state._selectValue)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrencyOptions;
