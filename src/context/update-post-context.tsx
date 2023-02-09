/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
export const UpdatePostContext = createContext();

const initialState = {
  projects: [],
  selectedProject: {},
  targetTitleUrlTerm: {
    target_title: "",
    relevant_term: "",
    target_url: "",
  },
  aiSuggestions: [],
  chosenTitleUrl: {},
  generatedHeading: "",
  updateAbove: {
    oldData: [],
    newData: [],
  },
  userSteps: 1,
  currentUser: {},
};

const projectsReducer = (state, action) => {
  switch (action.type) {
    case "projects":
      return {
        ...state,
        projects: [...action.payload],
      };
    case "projectDelete":
      return {
        ...state,
        projects: [
          ...state.projects.filter((project) => project.id != action.payload),
        ],
      };
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return {
        ...state,
        generatedParagraph: action.payload,
      };
    case "updateAbove":
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        updateAbove: { ...state.updateAbove, oldData: [...action.payload] },
      };
    case "newUpdateAbove":
      return {
        ...state,
        updateAbove: { ...state.updateAbove, newData: [...action.payload] },
      };

    case "userSteps": {
      return { ...state, userSteps: state.userSteps + action.payload };
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

const UpdatePostProvider = ({ children }) => {
  // final state management with useReducer hook
  const [state, dispatch] = useReducer(
    projectsReducer,
    initialState,
    getStorageValue
  );

  const [loading, setLoading] = useState(false);

  const clearAppState = async () => {
    await dispatch({ type: "selectedProject", payload: {} });
    await dispatch({ type: "targetTitleUrl", payload: {} });
    await dispatch({ type: "aiSuggestions", payload: [] });
    await dispatch({ type: "choosenTitleUrl", payload: {} });
    await dispatch({ type: "generatedHeading", payload: "" });
    await dispatch({ type: "generatedParagraph", payload: "" });
    await dispatch({ type: "updateAbove", payload: [] });
    await dispatch({ type: "newUpdateAbove", payload: [] });
    setLoading(false);
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
        loading,
        setLoading,
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
