import React from "react";

import { currencyName, formatter } from "../helpers";
import CurrencyItem from "./CurrencyItem";

const CurrencyList = ({ currencies, inputValue, onItemRemove }) => {
  let renderList = Object.keys(currencies)
    .sort()
    .map(key => {
      const currency = currencyName(key);
      const currencyValue = formatter.format(currencies[key]);
      const conversionValue = formatter.format(currencyValue * inputValue);
      return (
        <CurrencyItem
          currencyKey={key}
          currencyName={currency}
          currencyValue={currencyValue}
          conversionValue={conversionValue}
          onItemRemove={onItemRemove}
          key={key}
        />
      );
    });

  if (isNaN(inputValue)) renderList = <span>Cannot convert empty value!</span>;

  return (
    <div className="ui segment">
      <div className="ui divided items currency-list">{renderList}</div>
    </div>
  );
};

export default CurrencyList;
