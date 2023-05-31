import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import CurrencyPickers from '../components/CurrencyPickers';
import ShowListButton from '../components/OneToMany/ShowListButton';
import DateInput from '../components/DateInput';
import '../components/styles/currency-change-by-time.css';
import List from '../components/CurrencyChangebyTime/List';
import { getExchangeRates} from '../api/api';
const CurrencyChangeByTime = () => {
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('BYN');

  const [firstDate, setFirstDate] = useState(new Date().toISOString().slice(0, 10));
  const [secondDate, setSecondDate] = useState(new Date().toISOString().slice(0, 10));

  const [data, setData] = useState([]);
  useEffect(() => {
    getExchangeRates('', '', '').then((res) => setData(res));
  }, []);
  return (
    <>
      <Title currencies={[firstCurrency, secondCurrency]} />
      <CurrencyPickers
        currencies={[firstCurrency, secondCurrency]}
        setCurrencies={[setFirstCurrency, setSecondCurrency]}
        children={<ShowListButton text={'Show change'} />}
      />
      <div className="dates-zone">
        <DateInput date={firstDate} setDate={setFirstDate} />
        <DateInput date={secondDate} setDate={setSecondDate} />
      </div>
      <List data={data} currencies={[firstCurrency, secondCurrency]} />
    </>
  );
};

export default CurrencyChangeByTime;
