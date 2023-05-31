import React from 'react';
import { Input } from '@mui/material';

const DateInput = ({ text = 'Date:', date, setDate }) => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', width: '500px', justifyContent: 'center' }}>
      <div
        style={{
          height: '100px',
          fontSize: '30px',
          display: 'flex',
          padding: '30px',
          alignItems: 'center',
          color: '#dcd4d4'
        }}>
        {text}
      </div>
      <Input
        style={{ width: '250px', height: '50px', fontSize: '30px', marginRight: '1' }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
      />
    </div>
  );
};

export default DateInput;
