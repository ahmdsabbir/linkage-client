import React, { createContext, useContext, useState } from "react";
const contextData = createContext();

const Provider = ({ children }) => {
  const [userData, setUserData] = useState("");
  const [termData, setTermData] = useState("");
  return (
    <contextData.Provider
      value={{ userData, setUserData, termData, setTermData }}
    >
      {children}
    </contextData.Provider>
  );
};

export default Provider;

export const globalData = () => useContext(contextData);
