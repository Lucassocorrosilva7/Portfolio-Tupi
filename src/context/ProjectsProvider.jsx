import { createContext, useState, useEffect } from "react";
import { projects } from "../utils/api";

const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await projects;
      setProject(res);
    };
    fetchProjects();
  }, []);

  return (
    <ProjectsContext.Provider
      value={{
        project,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsProvider };

export default ProjectsContext;
