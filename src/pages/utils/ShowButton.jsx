import React from 'react';
import './styles/show-list-button.css';
const ShowButton = ({ text, onClick }) => {
  return (
    <button className={'show-list-button'} onClick={onClick}>
      {text}
    </button>
  );
};

export default ShowButton;
