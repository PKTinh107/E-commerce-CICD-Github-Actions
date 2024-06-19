// D:\CODE\e-commerce\src\Components\Header\Header\Nav.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.scss';
import enTranslation from '../../../../public/locale/en/translation.json'; // Import translation.json

const Nav = () => {
  const { loginInfo } = useSelector((state) => state.user);
  const navDirection = 'ltr'; // Assume 'ltr' for simplicity

  return (
    <nav className={s.nav} dir={navDirection}>
      <ul>
        <li>
          <NavLink to="/e-commerce/">{enTranslation.nav.home}</NavLink>
        </li>
        <li>
          <NavLink to="/contact">{enTranslation.nav.contact}</NavLink>
        </li>
        <li>
          <NavLink to="/about">{enTranslation.nav.about}</NavLink>
        </li>
        <li>
          {loginInfo.isSignIn ? (
            <NavLink to="/profile">{enTranslation.nav.profile}</NavLink>
          ) : (
            <NavLink to="/signup">{enTranslation.nav.signUp}</NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
