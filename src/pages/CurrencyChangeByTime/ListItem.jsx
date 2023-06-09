import React from 'react';
import './styles/list-item.css';
const ListItem = ({ text, value }) => {
  return <div className="currency-change-by-time-list-item">{text + ' ' + value}</div>;
};

export default ListItem;
