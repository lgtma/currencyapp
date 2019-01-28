import React from "react";

import exchangerates from "../api/exchangerates";
import { reverseObjectEntries, stripNumber } from "../helpers";

import CurrencyInput from "./CurrencyInput";
import CurrencyList from "./CurrencyList";
import CurrencyOptions from "./CurrencyOptions";

class App extends React.Component {
  state = {
    _currencies: {},
    _currenciesList: {},
    _currenciesOption: {},
    _selectedItem: null,
    _initValue: 10,
    _showOptions: false,
    _isLoading: true,
    _errorFetch: false
  };

  componentDidMount() {
    this.getCurrencies();
  }

  getCurrencies() {
    exchangerates
      .get("/latest?base=USD")
      .then(response => {
        const rates = response.data.rates;
        this.setState({
          _currencies: rates,
          _isLoading: false
        });

        // exclude USD from currencies object list
        const { USD, ...curs } = rates;
        this.currencyLists(curs);

        const currencies_options = Object.entries(curs)
          .sort()
          .slice(4);
        this.currencyOptions(currencies_options);
      })
      .catch(error => {
        console.log(error);
        this.setState({ _errorFetch: true });
      });
  }

  currencyLists = val => {
    let currencies_list = Object.entries(val)
      .sort()
      .slice(0, 4);
    currencies_list = reverseObjectEntries(currencies_list);
    // set state currency list
    this.setState({ _currenciesList: currencies_list });
  };

  currencyOptions = val => {
    const currencies_option = reverseObjectEntries(val);
    // set state currency options
    this.setState({ _currenciesOption: currencies_option });
  };

  onInputSubmit = val => {
    const stripval = parseFloat(stripNumber(val));
    this.setState({ _initValue: stripval });
  };

  onItemSelect = item => {
    const currentSelectedItem = this.state._selectedItem;

    if (item !== currentSelectedItem) {
      this.setState({ _selectedItem: item });

      // get item value from rates
      const itemValue = this.state._currencies[item];

      // add item to currency list state
      const currentList = this.state._currenciesList;
      currentList[item] = itemValue;

      // remove item from currency option state
      const currentOptions = this.state._currenciesOption;
      delete currentOptions[item];
    }
  };

  onItemRemove = item => {
    const currentList = this.state._currenciesList;
    const itemValue = currentList[item];

    // delete item from currency list state
    delete currentList[item];
    this.currencyLists(currentList);

    // add item to currency option state
    const currentOptions = this.state._currenciesOption;
    currentOptions[item] = itemValue;
  };

  toggleOptions = () => {
    this.setState({ _showOptions: !this.state._showOptions });
  };

  render() {
    return (
      <div
        style={{ marginTop: "16px", marginBottom: "16px" }}
        className="ui container"
      >
        <CurrencyInput
          onSubmit={this.onInputSubmit}
          defaultValue={this.state._initValue}
        />

        {this.state._isLoading ? (
          <div className="ui segment" style={{ padding: "2rem" }}>
            {this.state._errorFetch ? (
              <span>Something went wrong...</span>
            ) : (
              <div className="ui active loader" />
            )}
          </div>
        ) : (
          <CurrencyList
            currencies={this.state._currenciesList}
            inputValue={this.state._initValue}
            onItemRemove={this.onItemRemove}
          />
        )}

        <button className="ui button orange" onClick={this.toggleOptions}>
          <i className="icon plus" /> Add More Currencies
        </button>

        {this.state._showOptions ? (
          <CurrencyOptions
            options={this.state._currenciesOption}
            onItemSelect={this.onItemSelect}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
