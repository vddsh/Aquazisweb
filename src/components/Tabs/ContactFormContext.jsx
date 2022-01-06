import React, { createContext, useReducer, useContext } from "react";

function formReducer(state, action) {
  switch (action.type) {
    case "LENGTH_CHANGE":
      return { ...state, length: action.payload };
    case "INNERLENGTH_CHANGE":
      return { ...state, innnerLength: action.payload };
    case "WIDTH_CHANGE":
      return { ...state, width: action.payload };
    case "HEIGHT_CHANGE":
      return { ...state, heigth: action.payload };
    case "CATEGORIES_CHANGE":
      return { ...state, categories: action.payload };
    case "INSTALLATION_CHANGE":
      return { ...state, installation: action.payload };
    case "PROFILETYPE_CHANGE":
      return { ...state, profileType: action.payload };
    case "PARAMETERS_CHANGE":
      return { ...state, parameters: action.payload };
    case "SUBMIT":
      return { ...state, isSubmitLoading: true };
    case "SUBMISSION_RECEIVED":
      return { ...state, isSubmitLoading: false, isSubmissionReceived: true };
    default:
      throw new Error();
  }
}

const ContactFormContext = createContext();

const initialState = {
  length: "",
  innnerLength: "",
  width: "",
  heigth: "",

  categories: "",
  installation: "",
  profileType: "",
  parameters: [],

  isSubmitLoading: false,
  isSubmissionReceived: false,
};

export const ContactFormProvider = function({ children }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <ContactFormContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactFormContext.Provider>
  );
};

export function useContactFormState() {
  const context = useContext(ContactFormContext);

  if (context === undefined) {
    throw new Error(
      "useContactForState must be used within a ContactFormProvider"
    );
  }
  return context;
}
