import React from 'react';
import { CircularProgress } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';

const CercularProgressBar = ({ value, onClick }) => {
  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={value}
        onClick={onClick}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default CercularProgressBar;
