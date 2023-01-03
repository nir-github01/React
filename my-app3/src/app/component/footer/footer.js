import React from 'react';
import logo from './logo.svg'
import './footer.css';

function Footer () {
    return (
      <div className='footerClass'>
       <div className='logoClass'>
       {/* <img src={logo} className="App-logo" alt="logo" /> */}
       <i class="fa-sharp fa-solid fa-copyright"></i>
      </div>
      <div>
      <h5 className='footerspan'>footer section</h5>
       </div>
      
      </div>
    );
}
export default Footer;