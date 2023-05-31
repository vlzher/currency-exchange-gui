import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from '../../components/theme';
import { ThemeProvider } from '@mui/material/styles';
import CurrencyExchangePage from '../CurrencyExchangePage';
import GraphPage from '../GraphPage';
import OneToManyPage from '../OneToManyPage';
import CurrencyChangeByTimePage from '../CurrencyChangeByTimePage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<CurrencyExchangePage />} />
            <Route path="/graph" element={<GraphPage />} />
            <Route path="/one-to-many" element={<OneToManyPage />} />
            <Route path="/currency-change" element={<CurrencyChangeByTimePage />} />
            <Route path="/*" element={<CurrencyExchangePage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
