import React, { useState } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import NavMenu from '../NavMenu/NavMenu';
import hamburger from '../../images/icon-hamburger.svg'


const Header = () => {
  const [isClosed, setIsClosed] = useState(true);

  const hamburgerMenuHandler = () => setIsClosed(prevState => !prevState);

  return (
    <header className='header'>
      <nav className='container nav-bar'>
        <div>
          <img src={logo} alt="logo" />
        </div>
        {
          isClosed ? <NavMenu /> : <NavMenu mobile='mobile' />
        }
        <div className='hamburger' onClick={hamburgerMenuHandler}>
          <img src={hamburger} alt="menu" />
        </div>
      </nav>
    </header>
  );
};

export default Header;