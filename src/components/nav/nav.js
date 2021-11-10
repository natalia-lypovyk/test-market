import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="nav">
    <NavLink
      exact
      to="/"
      className={({ isActive }) => `nav__item ${isActive ? 'active' : ''}`}
    >
      Home
    </NavLink>

    <NavLink
      exact
      to="/send-tokens"
      className={({ isActive }) => `nav__item ${isActive ? 'active' : ''}`}
    >
      Send tokens
    </NavLink>
  </nav>
);

export default Nav;
