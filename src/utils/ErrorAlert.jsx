import React from 'react';
import { Alert, Snackbar } from '@mui/material';

const ErrorAlert = ({ isNotificationOpen, setIsNotificationOpen, alertText }) => {
  return (
    <>
      <Snackbar
        open={isNotificationOpen}
        autoHideDuration={6000}
        onClose={() => setIsNotificationOpen(false)}>
        <Alert onClose={() => setIsNotificationOpen(false)} severity="error" sx={{ width: '100%' }}>
          {alertText}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ErrorAlert;
