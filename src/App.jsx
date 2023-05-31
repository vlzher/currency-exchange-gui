import React, { useState } from 'react';
import Navbar from './pages/utils/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './utils/theme';
import { ThemeProvider } from '@mui/material/styles';
import CurrencyExchangePage from './pages/CurrencyExchangePage';
import GraphPage from './pages/GraphPage';
import OneToManyPage from './pages/OneToManyPage';
import CurrencyChangeByTimePage from './pages/CurrencyChangeByTimePage';
import CercularProgressBar from './utils/CercularProgressBar';
import ErrorAlert from './utils/ErrorAlert';

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [alertText, setAlertText] = useState('Error');
  function callTheAlert(text) {
    setAlertText(text);
    setIsNotificationOpen(true);
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CercularProgressBar value={isActive} onClick={() => setIsActive(false)} />
        <ErrorAlert
          isNotificationOpen={isNotificationOpen}
          setIsNotificationOpen={setIsNotificationOpen}
          alertText={alertText}
        />
        <div className="app">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <CurrencyExchangePage
                  setIsActive={setIsActive}
                  callTheAlert={(text) => callTheAlert(text)}
                />
              }
            />
            <Route
              path="/graph"
              element={
                <GraphPage setIsActive={setIsActive} callTheAlert={(text) => callTheAlert(text)} />
              }
            />
            <Route
              path="/one-to-many"
              element={
                <OneToManyPage
                  setIsActive={setIsActive}
                  callTheAlert={(text) => callTheAlert(text)}
                />
              }
            />
            <Route
              path="/currency-change"
              element={
                <CurrencyChangeByTimePage
                  setIsActive={setIsActive}
                  callTheAlert={(text) => callTheAlert(text)}
                />
              }
            />
            <Route
              path="/*"
              element={
                <CurrencyExchangePage
                  setIsActive={setIsActive}
                  callTheAlert={(text) => callTheAlert(text)}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
