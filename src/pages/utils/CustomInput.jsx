import React from 'react';
import { Input } from '@mui/material';

const CustomInput = ({ style, value, onChange, step }) => {
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
          step: step
        }
      }}
    />
  );
};

export default CustomInput;
