/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createContext, useContext, useEffect, useReducer } from "react";
export const UpdatePostContext = createContext();

const initialState = {
  selectedProject: {},
  targetTitleUrlTerm: {
    target_title: "",
    relevant_term: "",
    target_url: "",
  },
  aiSuggestions: [],
  chosenTitleUrl: {},
  generatedHeading: "",

  userSteps: 1,
  currentUser: {},
};

const projectsReducer = (state, action) => {
  switch (action.type) {
    case "selectedProject":
      return {
        ...state,
        selectedProject: { ...action.payload },
      };
    case "targetTitleUrl":
      return {
        ...state,
        targetTitleUrlTerm: {
          ...state.targetTitleUrlTerm,
          target_title: action.payload.targetTitle,
          target_url: action.payload.targetURL,
        },
      };
    case "relevantTerm":
      return {
        ...state,
        targetTitleUrlTerm: {
          ...state.targetTitleUrlTerm,
          relevant_term: action.payload.relevantTerm,
        },
      };
    case "aiSuggestions":
      return {
        ...state,
        aiSuggestions: [...action.payload],
      };
    case "chosenTitleUrl":
      return {
        ...state,
        chosenTitleUrl: { ...action.payload },
      };
    case "generatedHeading":
      return {
        ...state,
        generatedHeading: action.payload,
      };
    case "generatedParagraph":
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return {
        ...state,
        generatedParagraph: action.payload,
      };

    case "userSteps": {
      return { ...state, userSteps: state.userSteps + action.payload };
    }

    default:
      return state;
  }
};

const UpdatePostProvider = ({ children }) => {
  const getStorageValue = (defaultValue = initialState) => {
    // getting stored value
    const saved = localStorage.getItem("projectData");
    const initial = JSON.parse(saved);
    return initial || defaultValue;
  };
  // final state management with useReducer hook
  const [state, dispatch] = useReducer(
    projectsReducer,
    initialState,
    getStorageValue
  );

  const clearAppState = async () => {
    dispatch({ type: "selectedProject", payload: {} });
    dispatch({ type: "targetTitleUrl", payload: {} });
    dispatch({ type: "relevantTerm", payload: {} });
    dispatch({ type: "aiSuggestions", payload: [] });
    dispatch({ type: "chosenTitleUrl", payload: {} });
    dispatch({ type: "generatedHeading", payload: "" });
    dispatch({ type: "generatedParagraph", payload: "" });
  };
  const clearProjectState = async () => {
    dispatch({ type: "targetTitleUrl", payload: {} });
    dispatch({ type: "relevantTerm", payload: "" });
    dispatch({ type: "aiSuggestions", payload: [] });
    dispatch({ type: "chosenTitleUrl", payload: {} });
    dispatch({ type: "generatedHeading", payload: "" });
    dispatch({ type: "generatedParagraph", payload: "" });
  };
  const clearRelevantProject = async () => {
    dispatch({ type: "relevantTerm", payload: {} });
    dispatch({ type: "aiSuggestions", payload: [] });
    dispatch({ type: "chosenTitleUrl", payload: {} });
    dispatch({ type: "generatedHeading", payload: "" });
    dispatch({ type: "generatedParagraph", payload: "" });
  };

  // get localstorage items from localstorage
  useEffect(() => {
    localStorage.setItem("projectData", JSON.stringify(state));
  }, [state]);

  // regular state
  return (
    <UpdatePostContext.Provider
      value={{
        state,
        dispatch,
        clearAppState,
        clearProjectState,
        clearRelevantProject,
      }}
    >
      {children}
    </UpdatePostContext.Provider>
  );
};

export default UpdatePostProvider;

export const useAppState = () => {
  const context = useContext(UpdatePostContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppProvider");
  }
  return context;
};
