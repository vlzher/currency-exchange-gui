import React, { useEffect, useState } from 'react';
import Title from './utils/Title';
import CurrencyPickers from './utils/CurrencyPickers';
import InputZone from './CurrencyExchange/InputZone';
import BottomZone from './CurrencyExchange/BottomZone';
import { convertCurrency } from '../api/api';
import { checkIfDateCorrect } from '../utils/checkIfDateCorrect';

const CurrencyExchangePage = ({ setIsActive, callTheAlert }) => {
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('BYN');

  const [firstValue, setFirstValue] = useState('0.0');
  const [secondValue, setSecondValue] = useState('0.0');

  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [interbankRate, setInterbankRate] = useState('+/- 0%');
  const [lastInterbankRate, setLastInterbankRate] = useState('+/- 0%');

  useEffect(() => {
    const lastCurrencyState = secondValue / (1 + lastInterbankRate[4] / 100);
    setLastInterbankRate(interbankRate);
    setSecondValue((lastCurrencyState * (1 + interbankRate[4] / 100)).toFixed(4));
  }, [interbankRate]);

  function checkCorrectness() {
    if (firstValue < 0) {
      callTheAlert('The value in input must be positive!');
      return false;
    }
    if (!checkIfDateCorrect(date)) {
      callTheAlert('The date must be before the actual date!');
      return false;
    }
    return true;
  }
  async function buttonHelper() {
    if (!checkCorrectness()) return;
    setIsActive(true);
    await convertCurrency(firstValue, firstCurrency, secondCurrency, date).then((res) => {
      setSecondValue(res);
      setIsActive(false);
    });
  }

  function reverseCurrencies() {
    const temp = firstCurrency;
    setFirstCurrency(secondCurrency);
    setSecondCurrency(temp);
  }
  return (
    <>
      <Title currencies={[firstCurrency, secondCurrency]} />
      <CurrencyPickers
        currencies={[firstCurrency, secondCurrency]}
        setCurrencies={[setFirstCurrency, setSecondCurrency]}
      />
      <InputZone
        values={[firstValue, secondValue]}
        setValues={[setFirstValue, setSecondValue]}
        reverseCurrencies={() => reverseCurrencies()}
      />
      <BottomZone
        date={date}
        setDate={setDate}
        interbankRate={interbankRate}
        setInterbankRate={setInterbankRate}
        onClick={() => buttonHelper()}
      />
    </>
  );
};

export default CurrencyExchangePage;
