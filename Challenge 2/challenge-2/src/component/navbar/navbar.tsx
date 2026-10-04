import React from "react";

import nav from "./navbar.module.css";
const NavBar = () => {
  return (
    <nav className={`${nav.container}`}>
      <h1 className={`${nav.logo}`}>TaskFlow</h1>
      <ul className={`${nav.navItems}`}>
        <li>Search</li>
        <li>Avatar</li>
      </ul>
    </nav>
  );
};

export default NavBar;
