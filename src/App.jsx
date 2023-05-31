import React from 'react';
import Navbar from './pages/utils/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './utils/theme';
import { ThemeProvider } from '@mui/material/styles';
import CurrencyExchangePage from './pages/CurrencyExchangePage';
import GraphPage from './pages/GraphPage';
import OneToManyPage from './pages/OneToManyPage';
import CurrencyChangeByTimePage from './pages/CurrencyChangeByTimePage';

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
