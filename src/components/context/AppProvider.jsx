import React, { createContext, useContext, useState } from "react";
export const AppStateContext = createContext();

const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState("");
  const [termData, setTermData] = useState("");
  const [projects, setProjects] = useState([]);
  return (
    <AppStateContext.Provider
      value={{
        userData,
        setUserData,
        termData,
        setTermData,
        projects,
        setProjects,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppProvider;

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppProvider");
  }
  return context;
};
