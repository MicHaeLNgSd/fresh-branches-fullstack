import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <li>
          <NavLink
            to='/'
            exact
            className={styles.navLink}
            activeClassName={styles.selected}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/profile'
            className={styles.navLink}
            activeClassName={styles.selected}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to='/reg' className={styles.navLink} activeClassName={styles.selected}>
            Registration
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
