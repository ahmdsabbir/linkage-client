import React, { createContext, useContext, useReducer, useState } from "react";
export const AppStateContext = createContext();

const initialState = {
  projects: [],

  postTitleUrlTerm: {
    target_title: "",
    relevant_term: "",
    target_url: "",
  },
  aiSuggestions: [],
  choosenTitleUrl: {},
  generatedHeading: "",

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
    case "aiSuggestions":
      return {
        ...state,
        aiSuggestions: [...action.payload],
      };
    case "choosenTitleUrl":
      return {
        ...state,
        choosenTitleUrl: { ...action.payload },
      };
    case "generatedHeading":
      return {
        ...state,
        generatedHeading: action.payload,
      };

    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  // final state management with useReducer hook
  const [state, dispatch] = useReducer(projectsReducer, initialState);

  // regular state management
  const [generatedParagraph, setGeneratedParagraph] = useState("");
  const [defaultHeading, setDefaultHeading] = useState([]);
  const [updateAbove, setUpdateAbove] = useState([]);
  return (
    <AppStateContext.Provider
      value={{
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
