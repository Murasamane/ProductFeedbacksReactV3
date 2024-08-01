/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const SortContext = createContext();

function SortContextProvider({ children }) {
  const [sortBy, setSortBy] = useState("-upvotes");
  return (
    <SortContext.Provider value={{ sortBy, setSortBy }}>
      {children}
    </SortContext.Provider>
  );
}

const useSortBy = () => {
  const context = useContext(SortContext);

  if (context === undefined)
    throw new Error("Sort being used outside of the provider");

  return context;
};

export { SortContextProvider, useSortBy };
