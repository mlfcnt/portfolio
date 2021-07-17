import React, { createContext, ReactChild, useState } from "react";

export const ProjectContext = createContext<any>({});

export const ProjectProvider = ({
  children,
}: {
  children?: ReactChild | ReactChild[];
}) => {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState({});
  const [showProjects, setShowProjects] = useState(true);
  const toggleShowProjects = () => setShowProjects(!showProjects);
  return (
    <ProjectContext.Provider
      value={{
        projects,
        setProjects,
        activeProject,
        setActiveProject,
        showProjects,
        toggleShowProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
