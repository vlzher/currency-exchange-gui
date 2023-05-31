import axios from 'axios';
const API_ENDPOINT = 'http://127.0.0.1:5000';

export const getExchangeRates = async (startDate, endDate, currency, source) => {
  const url = new URL(`${API_ENDPOINT}/change`);
  url.searchParams.set('start_date', startDate);
  url.searchParams.set('end_date', endDate);
  url.searchParams.set('currencies', currency);
  url.searchParams.set('source', source);
  const response = await axios.get(url.toString());
  return response.data.data;
};

export const convertCurrency = async (amount, from, to, date = '') => {
  const url = new URL(`${API_ENDPOINT}/convert`);
  url.searchParams.set('amount', amount);
  url.searchParams.set('from', from);
  url.searchParams.set('to', to);
  url.searchParams.set('date', date);
  const response = await axios.get(url.toString());
  return response.data.result;
};

export const getHistoricalRates = async (date, source) => {
  const url = new URL(`${API_ENDPOINT}/historical`);
  url.searchParams.set('date', date);
  url.searchParams.set('source', source);
  const response = await axios.get(url.toString());
  return response.data.data;
};

export const getSupportedCurrencies = async () => {
  const localStorageKey = 'supportedCurrencies';
  const storedCurrencies = localStorage.getItem(localStorageKey);

  if (storedCurrencies) {
    return JSON.parse(storedCurrencies);
  }

  const url = `${API_ENDPOINT}/list`;
  const response = await axios.get(url);
  const currencies = response.data.currencies;

  localStorage.setItem(localStorageKey, JSON.stringify(currencies));

  return currencies;
};

export const getHistoricalRatesByTimeframe = async (currency, source, numberDays = 90) => {
  const url = new URL(`${API_ENDPOINT}/timeframe`);
  const firstDate = new Date(Date.now() - numberDays * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const secondDate = new Date().toISOString().slice(0, 10);
  url.searchParams.set('start_date', firstDate);
  url.searchParams.set('end_date', secondDate);
  url.searchParams.set('currencies', currency);
  url.searchParams.set('source', source);
  const response = await axios.get(url.toString());
  return response.data.data;
};
