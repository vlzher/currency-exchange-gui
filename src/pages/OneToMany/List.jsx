import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import './styles/list.css';
import { getSupportedCurrencies } from '../../api/api';
const List = ({ list, onClick }) => {
  const [currencyList, setCurrencyList] = useState([]);
  useEffect(() => {
    getSupportedCurrencies().then((res) => setCurrencyList(res));
  }, []);
  return (
    <div className="one-to-many-list">
      {Object.keys(list).map((key, index) => (
        <ListItem
          onClick={() => onClick(key)}
          key={index}
          currency={key}
          currencyDefinition={currencyList[key]}
          amount={list[key]}
        />
      ))}
    </div>
  );
};

export default List;
