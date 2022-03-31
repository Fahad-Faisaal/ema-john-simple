import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = (props) => {
  return (
    <ul className={`menu ${props.mobile}`}>
      <li>
        <Link className='nav-link' to="/shop">Shop</Link>
      </li>
      <li>
        <Link className='nav-link' to="/orders">Orders</Link>
      </li>
      <li>
        <Link className='nav-link' to="/inventory">Manage Inventory</Link>
      </li>
      <li>
        <Link className='nav-link' to="/about">About us</Link>
      </li>
    </ul>
  );
};

export default NavMenu;