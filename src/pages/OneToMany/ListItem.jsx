import React from 'react';
import '../styles/one-to-many-list-item.css';
const ListItem = ({ currency, currencyDefinition, amount, onClick }) => {
  return (
    <div className="one-to-many-list-item" onClick={() => onClick()}>
      {amount + ' ' + currency + ' (' + currencyDefinition + ')'}
    </div>
  );
};

export default ListItem;
