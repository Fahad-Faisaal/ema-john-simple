import React from 'react';
import './NavMenu.css';

const NavMenu = (props) => {
  return (
    <ul className={`menu ${props.mobile}`}>
      <li>
        <a href="/shop">Shop</a>
      </li>
      <li>
        <a href="/orders">Orders</a>
      </li>
      <li>
        <a href="/inventory">Manage Inventory</a>
      </li>
      <li>
        <a href="/about">About us</a>
      </li>
    </ul>
  );
};

export default NavMenu;