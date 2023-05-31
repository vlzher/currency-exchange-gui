import React, { useState } from 'react';
import CurrencyPicker from './utils/CurrencyPicker';
import './utils/styles/currency-picker.css';
import DateInput from './utils/DateInput';
import ShowButton from './utils/ShowButton';
import List from './OneToMany/List';
import { getHistoricalRates } from '../api/api';
import { checkIfDateCorrect } from '../utils/checkIfDateCorrect';
const OneToManyPage = () => {
  const [currency, setCurrency] = useState('USD');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [data, setData] = useState([]);
  const [isListShowed, setIsListShowed] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isDataCorrect, setIsDataCorrect] = useState(true);

  function correctionChecker() {
    const result = checkIfDateCorrect(date);
    setIsDataCorrect(result);
  }
  function listHandler() {
    correctionChecker();
    setIsListShowed(false);
    getHistoricalRates(date, currency).then((res) => setData(res));
    setIsListShowed(true);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <div
        style={{
          height: '100px',
          fontSize: '50px',
          display: 'flex',
          padding: '30px',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#dcd4d4'
        }}>
        {currency} exchange rates
      </div>
      <div
        className={'currency-pickers'}
        style={{ alignItems: 'center', justifyContent: 'center' }}>
        <CurrencyPicker currency={currency} setCurrency={(e) => setCurrency(e.target.value)} />
      </div>
      <DateInput date={date} setDate={setDate} />
      <ShowButton text={'Show list'} onClick={() => listHandler()} />
      {isListShowed ? <List list={data} onClick={setCurrency} /> : null}
    </div>
  );
};

export default OneToManyPage;
