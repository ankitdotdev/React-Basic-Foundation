import React from "react";
interface LayoutWrapperProps {
  children: React.ReactNode;
}

import layout from "./layoutWrapper.module.css";
const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <div className={`${layout.container}`}>
      <nav className={`${layout.navbar}`}>
        <h1 className={`${layout.logo}`}>Logo</h1>

        <ul className={`${layout.navItems}`}>
          <li>Search</li>
          <li>Avatar</li>
        </ul>
      </nav>
      <div className={layout.base2}>
        <aside>
          <ul className={`${layout.sideBarItems}`}>
            <li>Dashboard</li>
            <li>Projects</li>
            <li>Tasks</li>
            <li>Analytics</li>
            <li>Settings</li>
          </ul>
        </aside>
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;
