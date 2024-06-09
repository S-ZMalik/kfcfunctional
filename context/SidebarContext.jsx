import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [active, setActive] = useState(true);
  const [disp, setDisplay] = useState(true);

  function diplayChange(e) {
    if (e.target === e.currentTarget) {
      setDisplay(!disp);
    }
  }

  return (
    <SidebarContext.Provider
      value={{ active, setActive, disp, setDisplay, diplayChange }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarProvider;
