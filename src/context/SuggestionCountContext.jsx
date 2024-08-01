/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const SuggestionCountContext = createContext();

function SuggestionCountContextProvider({ children }) {
  const [suggestionCount, setSuggestionCount] = useState(0);
  return (
    <SuggestionCountContext.Provider
      value={{ suggestionCount, setSuggestionCount }}
    >
      {children}
    </SuggestionCountContext.Provider>
  );
}

const useSuggestionCount = () => {
  const context = useContext(SuggestionCountContext);

  if (context === undefined)
    throw new Error("Suggestion count being used outside of its provider");

  return context;
};

export { SuggestionCountContextProvider, useSuggestionCount };
