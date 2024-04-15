import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <ul className={style.nav}>
        <li>
          <Link to='/' className={style.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/profile' className={style.navLink}>
            Profile
          </Link>
        </li>
        <li>
          <Link to='/reg' className={style.navLink}>
            Registration
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
