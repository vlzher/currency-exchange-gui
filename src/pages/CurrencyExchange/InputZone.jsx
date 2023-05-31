import React, { useState } from 'react';
import '../styles/input-zone.css';
import CustomInput from './CustomInput';
const InputZone = ({ values, setValues, reverseCurrencies }) => {
  const [isReversed, setIsReversed] = useState(false);
  function buttonClickHandler() {
    setIsReversed(!isReversed);
    let temp = values[0];
    setValues[0](values[1]);
    setValues[1](temp);
    reverseCurrencies();
  }
  const style = {
    width: '500px',
    height: '100px',
    marginRight: '50px',
    marginLeft: '50px',
    paddingLeft: '50px',
    backgroundColor: 'black',
    fontSize: '40px'
  };
  return (
    <div className="input-zone">
      <CustomInput
        value={values[0]}
        onChange={setValues[0]}
        placeholder={values[0]}
        style={style}
      />
      <button
        className={`reverse-button ${isReversed ? 'reversed' : ''}`}
        onClick={() => buttonClickHandler()}
      />
      <CustomInput
        value={values[1]}
        onChange={setValues[1]}
        placeholder={values[1]}
        style={style}
      />
    </div>
  );
};

export default InputZone;
