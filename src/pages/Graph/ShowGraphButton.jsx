import React from 'react';
import './styles/show-graph-button.css';
const ShowGraphButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={'show-graph-button'}>
      Show Graph
    </button>
  );
};

export default ShowGraphButton;
