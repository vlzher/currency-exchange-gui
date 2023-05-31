import React, { useState } from 'react';
import Title from './utils/Title';
import CurrencyPickers from './utils/CurrencyPickers';
import ShowButton from './utils/ShowButton';
import DateInput from './utils/DateInput';
import './CurrencyChangeByTime/styles/page.css';
import List from './CurrencyChangeByTime/List';
import { getExchangeRates } from '../api/api';
import { checkIfDateCorrect } from '../utils/checkIfDateCorrect';
const CurrencyChangeByTimePage = () => {
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('BYN');

  const [firstDate, setFirstDate] = useState(new Date().toISOString().slice(0, 10));
  const [secondDate, setSecondDate] = useState(new Date().toISOString().slice(0, 10));

  const [data, setData] = useState([]);

  const [isListShowed, setIsListShowed] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isCorrect, setIsCorrect] = useState(true);

  function correctionChecker() {
    checkIfDateCorrect(firstDate) && checkIfDateCorrect(secondDate)
      ? setIsCorrect(true)
      : setIsCorrect(false);
  }
  function buttonHandler() {
    correctionChecker();
    setIsListShowed(false);
    getExchangeRates(firstDate, secondDate, secondCurrency, firstCurrency).then((res) =>
      setData(res)
    );
    setIsListShowed(true);
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
