import React, { createContext, useContext, useReducer } from "react";
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
  updateAbove: {
    oldData: [],
    newData: [],
  },
  loading: false,
  currentUser: {},
};

const projectsReducer = (state, action) => {
  switch (action.type) {
    case "projects":
      return {
        ...state,
        projects: [...action.payload],
        loading: false,
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
        loading: false,
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
    case "generatedParagraph":
      return {
        ...state,
        generatedParagraph: action.payload,
        loading: false,
      };
    case "updateAbove":
      return {
        ...state,
        updateAbove: { ...state.updateAbove, oldData: [...action.payload] },
      };
    case "newUpdateAbove":
      return {
        ...state,
        updateAbove: { ...state.updateAbove, newData: [...action.payload] },
      };

    case "loading": {
      return { ...state, loading: true };
    }

    default:
      return state;
  }
};

const getStorageValue = (defaultValue = initialState) => {
  // getting stored value
  const saved = localStorage.getItem("projectData");
  const initial = JSON.parse(saved);
  return initial || defaultValue;
};

const AppProvider = ({ children }) => {
  // final state management with useReducer hook
  const [state, dispatch] = useReducer(
    projectsReducer,
    initialState,
    getStorageValue
  );

  // regular state
  return (
    <AppStateContext.Provider
      value={{
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
