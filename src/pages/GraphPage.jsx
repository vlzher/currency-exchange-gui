import React, { useState } from 'react';
import Graph from './Graph/Graph';
import Title from './utils/Title';
import CurrencyPickers from './utils/CurrencyPickers';
import ShowGraphButton from './Graph/ShowGraphButton';
import { getHistoricalRatesByTimeframe } from '../api/api';
import CustomInput from './utils/CustomInput';

const GraphPage = ({ setIsActive, callTheAlert }) => {
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('BYN');
  const [isGraphShown, setIsGraphShown] = useState(false);
  const [dataGraph, setDataGraph] = useState([]);
  const [dateInterval, setDateInterval] = useState(90);

  function checkCorrectness() {
    if (dateInterval > 365 || dateInterval < 1) {
      callTheAlert('Date interval should be between 1 and 365 days');
      return false;
    }
    return true;
  }
  function onClickHelper() {
    if (!checkCorrectness()) return;
    setIsActive(true);
    setIsGraphShown(false);
    getHistoricalRatesByTimeframe(firstCurrency, secondCurrency, dateInterval).then((res) => {
      setDataGraph(res);
      setIsActive(false);
      setIsGraphShown(true);
    });
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
