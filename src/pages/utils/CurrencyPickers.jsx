import React from 'react';
import CurrencyPicker from './CurrencyPicker';
import './styles/currency-pickers.css';
const CurrencyPickers = ({ currencies, setCurrencies, children }) => {
  return (
    <div className="currency-pickers">
      <CurrencyPicker
        currency={currencies[0]}
        setCurrency={(e) => setCurrencies[0](e.target.value)}
      />
      {children}
      <CurrencyPicker
        currency={currencies[1]}
        setCurrency={(e) => setCurrencies[1](e.target.value)}
      />
    </div>
  );
};

export default CurrencyPickers;
