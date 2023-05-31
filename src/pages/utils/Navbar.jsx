import React from 'react';
import './styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbar">VLZHER CURRENCY EXCHANGER</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/graph">Graph</Link>
        <Link to={'/one-to-many'}>One to many</Link>
        <Link to={'/currency-change'}>By time</Link>
      </div>
    </>
  );
};

export default Navbar;
