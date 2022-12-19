import React, { createContext, useContext, useState } from "react";
const contextData = createContext();

const Provider = ({ children }) => {
  const [userData, setUserData] = useState("");
  return (
    <contextData.Provider value={{ userData, setUserData }}>
      {children}
    </contextData.Provider>
  );
};

export default Provider;

export const globalData = () => useContext(contextData);
