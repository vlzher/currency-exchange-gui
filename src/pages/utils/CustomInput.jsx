import React from 'react';
import { Input } from '@mui/material';

const CustomInput = ({ style, value, onChange }) => {
  return (
    <Input
      type={'number'}
      color="primary"
      style={style}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={value[0]}
      slotProps={{
        input: {
          min: 0,
          step: 0.1
        }
      }}
    />
  );
};

export default CustomInput;
