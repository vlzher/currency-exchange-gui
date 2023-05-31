import React from 'react';
import ListItem from './ListItem';
import './styles/list.css';
const List = ({ data, currencies }) => {
  return (
    <div className={'currency-change-by-time-list'}>
      <ListItem
        text={'Start rate: 1 ' + currencies[0] + ' - '}
        value={data.start_rate + ' ' + currencies[1]}
      />
      <ListItem
        text={'End rate: 1 ' + currencies[0] + ' - '}
        value={data.end_rate + ' ' + currencies[1]}
      />
      <ListItem text={'Change: '} value={data.change + ' ' + currencies[1]} />
      <ListItem text={'Change by percent: '} value={data.change_pct + '%'} />
    </div>
  );
};

export default List;
