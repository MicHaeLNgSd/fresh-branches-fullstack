import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to='/reg'>Registration</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
