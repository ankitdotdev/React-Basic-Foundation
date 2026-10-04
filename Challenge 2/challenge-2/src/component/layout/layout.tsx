import React from "react";
interface LayoutWrapperInterface {
  children: React.ReactNode;
}

import layout from "./layout.module.css";
const LayoutWrapper: React.FC<LayoutWrapperInterface> = ({ children }) => {
  return (
    <div className={`${layout.container}`}>
      <nav>Navbar</nav>
      {children}
    </div>
  );
};

export default LayoutWrapper;
