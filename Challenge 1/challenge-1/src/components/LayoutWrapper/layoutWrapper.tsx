import React from "react";
interface LayoutWrapperProps {
  children: React.ReactNode;
}

import layout from "./layoutWrapper.module.css";
const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <div className={`${layout.container}`}>
      <nav className={`${layout.navbar}`}>Navbar</nav>
      <div className={layout.base2}>
        <aside>Sidebar</aside>
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;
