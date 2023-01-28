import React, { createContext, useContext, useEffect, useReducer } from "react";
export const AppStateContext = createContext();

const initialState = {
  projects: [],
  selectedProject: {},
  postTitleUrlTerm: {
    source_title: "",
    relevant_term: "",
    source_url: "",
  },
  aiSuggestions: [],
  choosenTitleUrl: {},
  generatedHeading: "",
  updateAbove: {
    oldData: [],
    newData: [],
  },
  loading: false,
  userSteps: 1,
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
    case "projectDelete":
      return {
        ...state,
        projects: [
          ...state.projects.filter((project) => project.id != action.payload),
        ],

        loading: false,
      };
    case "selectedProject":
      return {
        ...state,
        selectedProject: { ...action.payload },
        loading: false,
      };
    case "postTitleUrl":
      return {
        ...state,
        postTitleUrlTerm: {
          ...state.postTitleUrlTerm,
          source_title: action.payload.postTitle,
          source_url: action.payload.postURL,
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
        loading: false,
      };
    case "newUpdateAbove":
      return {
        ...state,
        updateAbove: { ...state.updateAbove, newData: [...action.payload] },
        loading: false,
      };

    case "userSteps": {
      return { ...state, userSteps: state.userSteps + action.payload };
    }
    case "loading": {
      return { ...state, loading: action.payload };
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

  const clearAppState = async () => {
    await dispatch({ type: "selectedProject", payload: {} });
    await dispatch({ type: "postTitleUrl", payload: {} });
    await dispatch({ type: "aiSuggestions", payload: [] });
    await dispatch({ type: "choosenTitleUrl", payload: {} });
    await dispatch({ type: "generatedHeading", payload: "" });
    await dispatch({ type: "generatedParagraph", payload: "" });
    await dispatch({ type: "updateAbove", payload: [] });
    await dispatch({ type: "newUpdateAbove", payload: [] });
  };

  // get localstorage items from localstorage
  useEffect(() => {
    localStorage.setItem("projectData", JSON.stringify(state));
  }, [state]);

  // regular state
  return (
    <AppStateContext.Provider
      value={{
        state,
        dispatch,
        clearAppState,
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
