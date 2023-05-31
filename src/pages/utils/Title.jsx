import React from 'react';
import './styles/title.css';
const Title = ({ currencies }) => {
  return <div className="title">{currencies[0] + ' to ' + currencies[1] + ' exchange'}</div>;
};

export default Title;
