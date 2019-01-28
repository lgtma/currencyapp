import React from "react";

const CurrencyItem = ({
  currencyKey,
  currencyName,
  currencyValue,
  conversionValue,
  onItemRemove
}) => (
  <div className="item">
    <div className="content">
      <div className="header">
        <span>{currencyKey} </span>
        <span>{conversionValue}</span>
      </div>
      <div className="description">
        <p style={{ marginBottom: "0" }}>
          {currencyKey} - {currencyName}
        </p>
        <p>
          <span>1 USD = {currencyKey}</span>
          <span style={{ marginLeft: "5px" }}>{currencyValue}</span>
        </p>
      </div>
      <div className="extra">
        <div
          className="ui right floated red small button"
          onClick={() => onItemRemove(currencyKey)}
        >
          <i className="icon trash" /> Remove
        </div>
      </div>
    </div>
  </div>
);

export default CurrencyItem;
