import React from "react";

import { currencyName } from "../helpers";
import CurrencyItem from "./CurrencyItem";

const CurrencyList = ({ currencies, inputValue, onItemRemove }) => {
  let renderList = Object.keys(currencies)
    .sort()
    .map(key => {
      const currency = currencyName(key);
      const currencyValue = currencies[key];
      return (
        <CurrencyItem
          currencyKey={key}
          currencyName={currency}
          currencyValue={currencyValue}
          inputValue={inputValue}
          key={key}
          onItemRemove={onItemRemove}
        />
      );
    });

  if (isNaN(inputValue))
    renderList = <span className="red">Cannot convert empty value!</span>;

  return (
    <div className="ui segment">
      <div className="ui divided items currency-list">{renderList}</div>
    </div>
  );
};

export default CurrencyList;
