import React, { createContext, useContext, useState } from "react";
export const AppStateContext = createContext();

const AppProvider = ({ children }) => {
  const [userPostTitle, setUserPostTitle] = useState("");
  const [termData, setTermData] = useState("");
  const [projects, setProjects] = useState([]);
  const [aiSuggestions, setAiSugetions] = useState([]);
  return (
    <AppStateContext.Provider
      value={{
        userPostTitle,
        setUserPostTitle,
        termData,
        setTermData,
        projects,
        setProjects,
        aiSuggestions,
        setAiSugetions,
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
