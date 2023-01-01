import React, { createContext, useContext, useState } from "react";
export const AppStateContext = createContext();

const AppProvider = ({ children }) => {
  const [userPostTitle, setUserPostTitle] = useState("");
  const [termData, setTermData] = useState("");
  const [projects, setProjects] = useState([]);
  const [aiSuggestions, setAiSugetions] = useState([]);
  const [chooseTitleUrl, setChooseTitleUrl] = useState([]);
  const [generatedHeading, setGeneratedHeading] = useState("");
  const [generatedParagraph, setGeneratedParagraph] = useState("");
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
        chooseTitleUrl,
        setChooseTitleUrl,
        generatedHeading,
        setGeneratedHeading,
        generatedParagraph,
        setGeneratedParagraph,
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
