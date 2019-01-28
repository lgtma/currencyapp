export const formatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  minimumFractionDigits: 2
});

export const stripNumber = val => {
  return val.toString().replace(/\D/g, "");
};

export const reverseObjectEntries = objVal => {
  const result = objVal
    .filter((key, value) => {
      return true;
    })
    .reduce((a, [key, value]) => {
      a[key] = value;
      return a;
    }, {});
  return result;
};

export const currencyName = key => {
  let currency;

  switch (key) {
    case "AUD":
      currency = "Australian Dollar";
      break;
    case "BGN":
      currency = "Bulgarian Lev";
      break;
    case "BRL":
      currency = "Brazilian Real";
      break;
    case "CAD":
      currency = "Canadian Dollar";
      break;
    case "CHF":
      currency = "Swiss Franc";
      break;
    case "CNY":
      currency = "Chinese Yuan";
      break;
    case "CZK":
      currency = "Czech Koruna";
      break;
    case "DKK":
      currency = "Danish Krone";
      break;
    case "EUR":
      currency = "Euro";
      break;
    case "GBP":
      currency = "Poundsterling";
      break;
    case "HKD":
      currency = "Hong Kong Dollar";
      break;
    case "HRK":
      currency = "Croatian Kuna";
      break;
    case "HUF":
      currency = "Hungarian Forint";
      break;
    case "IDR":
      currency = "Indonesian Rupiah";
      break;
    case "ILS":
      currency = "Israeli New Shekel";
      break;
    case "INR":
      currency = "Indian Rupee";
      break;
    case "ISK":
      currency = "Icelandic Króna";
      break;
    case "JPY":
      currency = "Japanese Yen";
      break;
    case "KRW":
      currency = "South Korean Won";
      break;
    case "MXN":
      currency = "Mexican Peso";
      break;
    case "MYR":
      currency = "Malaysian Ringgit";
      break;
    case "NOK":
      currency = "Norwegian Krone";
      break;
    case "NZD":
      currency = "New Zealand Dollar";
      break;
    case "PHP":
      currency = "Philippine Peso";
      break;
    case "PLN":
      currency = "Polish Zloty";
      break;
    case "RON":
      currency = "Romanian Leu";
      break;
    case "RUB":
      currency = "Rusian Ruble";
      break;
    case "SEK":
      currency = "Swedish Krona";
      break;
    case "SGD":
      currency = "Singapore Dollar";
      break;
    case "THB":
      currency = "Thai Baht";
      break;
    case "TRY":
      currency = "Turkish Lira";
      break;
    case "ZAR":
      currency = "South African Rand";
      break;
    default:
      currency = "United States Dollar";
  }

  return currency;
};
