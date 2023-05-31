import React, { useState } from 'react';
import Title from './utils/Title';
import CurrencyPickers from './utils/CurrencyPickers';
import ShowButton from './utils/ShowButton';
import DateInput from './utils/DateInput';
import './CurrencyChangeByTime/styles/page.css';
import List from './CurrencyChangeByTime/List';
import { getExchangeRates } from '../api/api';
import { checkIfDateCorrect } from '../utils/checkIfDateCorrect';
const CurrencyChangeByTimePage = ({ setIsActive, callTheAlert }) => {
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('BYN');

  const [firstDate, setFirstDate] = useState(new Date().toISOString().slice(0, 10));
  const [secondDate, setSecondDate] = useState(new Date().toISOString().slice(0, 10));

  const [data, setData] = useState([]);

  const [isListShowed, setIsListShowed] = useState(false);

  function checkCorrectness() {
    if (!checkIfDateCorrect(firstDate) || !checkIfDateCorrect(secondDate)) {
      callTheAlert('Incorrect date please use the date before the actual date!');
      return false;
    }
    if (new Date(firstDate) > new Date(secondDate)) {
      callTheAlert('The end date must be after the start date!');
      return false;
    }
    return true;
  }
  function buttonHandler() {
    if (!checkCorrectness()) return;
    setIsActive(true);
    setIsListShowed(false);
    getExchangeRates(firstDate, secondDate, secondCurrency, firstCurrency).then((res) => {
      setData(res);
      setIsListShowed(true);
      setIsActive(false);
    });
  }
  return (
    <>
      <Title currencies={[firstCurrency, secondCurrency]} />
      <CurrencyPickers
        currencies={[firstCurrency, secondCurrency]}
        setCurrencies={[setFirstCurrency, setSecondCurrency]}>
        <ShowButton text={'Show change'} onClick={() => buttonHandler()} />
      </CurrencyPickers>
      <div className="dates-zone">
        <DateInput text="Start date: " date={firstDate} setDate={setFirstDate} />
        <DateInput text="End date: " date={secondDate} setDate={setSecondDate} />
      </div>
      {isListShowed ? <List data={data} currencies={[firstCurrency, secondCurrency]} /> : null}
    </>
  );
};

export default CurrencyChangeByTimePage;
