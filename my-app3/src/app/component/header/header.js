import React from 'react';
import logo from './logo.svg';
import './header.css';

function Header () {
    return (
      <div className='headerClass'>
     <img src={logo} className="App-logo" alt="logo" />
      <h2>React App</h2>

      </div>
    );
}
export default Header;