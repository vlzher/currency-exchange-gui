import React, { useEffect, useState } from 'react';
import './styles/currency-picker.css';
import { FormControl, MenuItem, Select } from '@mui/material';
import { getSupportedCurrencies } from '../../api/api';
const CurrencyPicker = ({ currency, setCurrency }) => {
  const [currencyList, setCurrencyList] = useState([]);
  useEffect(() => {
    getSupportedCurrencies().then((res) => setCurrencyList(res));
  }, []);
  return (
    <FormControl
      fullWidth
      size="medium"
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        outline: 'none',
        width: '500px'
      }}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currency}
        label="choose currency"
        onChange={setCurrency}
        style={{ height: '100px', color: 'white', borderRadius: '20px', outline: 'none' }}
        MenuProps={{
          PaperProps: {
            style: {
              marginTop: '10px',
              backgroundColor: 'black',
              color: 'white',
              maxHeight: '500px',
              width: '350px'
            }
          }
        }}>
        {Object.keys(currencyList).map((item, index) => {
          return (
            <MenuItem key={index} value={item} style={{ fontSize: '20px' }}>
              {item + ' - ' + currencyList[item]}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CurrencyPicker;
