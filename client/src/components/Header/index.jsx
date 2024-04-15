import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <ul className={style.nav}>
        <li>
          <NavLink
            to='/'
            exact
            className={style.navLink}
            activeClassName={style.selected}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/profile'
            className={style.navLink}
            activeClassName={style.selected}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to='/reg' className={style.navLink} activeClassName={style.selected}>
            Registration
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
