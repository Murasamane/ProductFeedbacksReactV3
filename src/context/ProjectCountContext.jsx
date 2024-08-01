/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const ProjectCountContext = createContext();

function ProjectCountContextProvider({ children }) {
  const [{ planned, inProgress, live }, setProjectCount] = useState({
    planned: 0,
    inProgress: 0,
    live: 0,
  });
  return (
    <ProjectCountContext.Provider
      value={{
        planned,
        inProgress,
        live,
        setProjectCount,
      }}
    >
      {children}
    </ProjectCountContext.Provider>
  );
}

const useProjectCount = () => {
  const context = useContext(ProjectCountContext);
  if (context === undefined)
    throw new Error("Project Count being used outside of the provider");

  return context;
};
export { ProjectCountContextProvider, useProjectCount };
