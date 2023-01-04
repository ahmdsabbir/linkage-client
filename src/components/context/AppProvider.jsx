import React, { createContext, useContext, useReducer, useState } from "react";
export const AppStateContext = createContext();

const initialState = {
  projects: [
    {
      id: "1",
      name: "Google",
      domain: "google.com",
      wp_username: "admin",
      wp_password: "KJFLYTKJ8asldfkjd89",
      date_added: "1 Jan 2034",
    },
    {
      id: "2",
      name: "HP",
      domain: "hp.com",
      wp_username: "admin",
      wp_password: "KJFLYTKJ8asldfkjd89",
      date_added: "2 Jan 2034",
    },
    {
      id: "3",
      name: "sujle",
      domain: "sujle.com",
      wp_username: "admin",
      wp_password: "KJFLYTKJ8asldfkjd89",
      date_added: "3 Jan 2034",
    },
  ],

  currentUser: {},
};

const projectsReducer = (state, action) => {
  switch (action.type) {
    case "PROJECT":
      return {
        ...state,
        projects: [...action.payload],
      };

    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  // final state management with useReducer hook
  const [state, dispatch] = useReducer(projectsReducer, initialState);

  // regular state management
  const [userPostTitle, setUserPostTitle] = useState("");
  const [termData, setTermData] = useState("");
  const [projects, setProjects] = useState([]);
  const [aiSuggestions, setAiSugetions] = useState([]);
  const [chooseTitleUrl, setChooseTitleUrl] = useState([]);
  const [generatedHeading, setGeneratedHeading] = useState("");
  const [generatedParagraph, setGeneratedParagraph] = useState("");
  const [defaultHeading, setDefaultHeading] = useState([]);
  const [updateAbove, setUpdateAbove] = useState([]);
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
        defaultHeading,
        setDefaultHeading,
        updateAbove,
        setUpdateAbove,

        // useReducer function
        state,
        dispatch,
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
