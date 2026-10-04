import React from "react";
interface LayoutWrapperInterface {
  children: React.ReactNode;
}

import layout from "./layout.module.css";
import NavBar from "../navbar/navbar";
const LayoutWrapper: React.FC<LayoutWrapperInterface> = ({ children }) => {
  return (
    <div className={`${layout.container}`}>
      {/* I divided this at an early stage to keep the code clean, maintainable, and easy to understand.
    The less unnecessary code we have, the easier it is for the next developer to understand and maintain.
    There are many other benefits as well — you can Google them or ask AI about that shit. */}
      <NavBar />
      {children}
    </div>
  );
};

export default LayoutWrapper;
