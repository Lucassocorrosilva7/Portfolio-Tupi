import { createContext, useState, useEffect } from "react";
import { projects, skills, texts, infos } from "../utils/api";

const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [project, setProject] = useState([]);
  const [skill, setSkill] = useState([]);
  const [text, setText] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await projects;
      setProject(res);
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const fecthInfo = async () => {
      const res = await infos;
      setInfo(res);
    };
    fecthInfo();
  }, []);

  useEffect(() => {
    const fetchskills = async () => {
      const res = await skills;
      setSkill(res);
    };
    fetchskills();
  }, []);

  useEffect(() => {
    const fetchText = async () => {
      const res = await texts;
      setText(res);
    };
    fetchText();
  }, []);

  return (
    <ProjectsContext.Provider
      value={{
        project,
        skill,
        text,
        info,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsProvider };

export default ProjectsContext;
