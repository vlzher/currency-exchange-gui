import React, { useState } from 'react';
import Graph from './Graph/Graph';
import Title from './utils/Title';
import CurrencyPickers from './utils/CurrencyPickers';
import ShowGraphButton from './Graph/ShowGraphButton';
import { getHistoricalRatesByTimeframe } from '../api/api';
import CustomInput from './utils/CustomInput';

const GraphPage = () => {
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('BYN');
  const [isGraphShown, setIsGraphShown] = useState(false);
  const [dataGraph, setDataGraph] = useState([]);
  const [dateInterval, setDateInterval] = useState(90);
  // eslint-disable-next-line no-unused-vars
  const [isDataCorrect, setIsDataCorrect] = useState(true);

  function checkCorrectness() {
    setIsDataCorrect(dateInterval <= 365 && dateInterval >= 1);
  }
  function onClickHelper() {
    checkCorrectness();
    setIsGraphShown(false);
    getHistoricalRatesByTimeframe(firstCurrency, secondCurrency, dateInterval).then((res) =>
      setDataGraph(res)
    );
    setIsGraphShown(true);
  }
  const styleInput = {
    width: '500px',
    height: '100px',
    marginRight: '50px',
    marginLeft: '50px',
    paddingLeft: '50px',
    backgroundColor: 'black',
    fontSize: '40px'
  };
  return (
    <>
      <Title currencies={[firstCurrency, secondCurrency]} />
      <CurrencyPickers
        currencies={[firstCurrency, secondCurrency]}
        setCurrencies={[setFirstCurrency, setSecondCurrency]}>
        <ShowGraphButton text={'Show list'} onClick={() => onClickHelper()} />
      </CurrencyPickers>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          paddingTop: '20px'
        }}>
        <CustomInput style={styleInput} value={dateInterval} onChange={setDateInterval} step={1} />
      </div>

      {isGraphShown ? <Graph graphData={dataGraph} /> : null}
    </>
  );
};

export default GraphPage;
