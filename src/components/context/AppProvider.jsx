import React, { createContext, useContext, useReducer, useState } from "react";
export const AppStateContext = createContext();

const initialState = {
  projects: [],

  postTitleUrlTerm: {
    target_title: "",
    relevant_term: "",
    target_url: "",
  },

  currentUser: {},
};

const projectsReducer = (state, action) => {
  switch (action.type) {
    case "projects":
      return {
        ...state,
        projects: [...action.payload],
      };
    case "postTitleUrl":
      return {
        ...state,
        postTitleUrlTerm: {
          ...state.postTitleUrlTerm,
          target_title: action.payload.postTitle,
          target_url: action.payload.postURL,
        },
      };
    case "relevantTerm":
      return {
        ...state,
        postTitleUrlTerm: {
          ...state.postTitleUrlTerm,
          relevant_term: action.payload.relevantTerm,
        },
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
  const [aiSuggestions, setAiSugetions] = useState([]);
  const [chooseTitleUrl, setChooseTitleUrl] = useState("");
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
