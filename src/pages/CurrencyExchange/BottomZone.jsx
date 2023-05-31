import React from 'react';
import { FormControl, Input, MenuItem, Select } from '@mui/material';
import '../styles/bottom-zone.css';
import DateInput from '../DateInput';
const BottomZone = ({ date, setDate, interbankRate, setInterbankRate }) => {
  const interBankRates = {
    '+/- 0%': 1.0,
    '+/- 1%': 1.01,
    '+/- 2% (Typical ATM rate)': 1.02,
    '+/- 3% (Typical Credit Card rate)': 1.03,
    '+/- 4%': 1.04,
    '+/- 5% (Typical Kiosk rate)': 1.05
  };
  return (
    <div className="bottom-zone">
      <DateInput date={date} setDate={setDate} />
      <button className="calculate-button">Calculate</button>
      <div style={{ display: 'flex', alignItems: 'center', padding: '30px', width: '500px' }}>
        <div className="label-bottom" style={{ fontSize: '15px', width: '250px' }}>
          Preview interbank rate:
        </div>
        <FormControl
          fullWidth
          size="large"
          style={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '20px',
            outline: 'none',
            maxWidth: '250px'
          }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={interbankRate}
            label="choose currency"
            onChange={(e) => setInterbankRate(e.target.value)}
            style={{ color: 'white', borderRadius: '20px', outline: 'none' }}
            MenuProps={{
              PaperProps: {
                style: {
                  marginTop: '10px',
                  backgroundColor: 'black',
                  color: 'white',
                  maxHeight: '500px'
                }
              }
            }}>
            {Object.keys(interBankRates).map((item, index) => {
              return (
                <MenuItem key={index} value={item} style={{ fontSize: '20px' }}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default BottomZone;
