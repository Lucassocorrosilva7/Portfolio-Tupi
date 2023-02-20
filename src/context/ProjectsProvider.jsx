import { createContext, useState, useEffect } from "react";
import { projects, skills, texts, infos, links } from "@/utils/api";

const useDataLoader = (setData, dataApi) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dataApi;
        setData(res);
      } catch (error) {
        console.log(`Erro ao buscar dados ${error}`);
      }
    };
    fetchData();
  }, []);
};

const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [project, setProject] = useState([]);
  const [skill, setSkill] = useState([]);
  const [text, setText] = useState([]);
  const [info, setInfo] = useState([]);
  const [link, setLink] = useState([]);

  useDataLoader(setProject, projects);
  useDataLoader(setSkill, skills);
  useDataLoader(setText, texts);
  useDataLoader(setInfo, infos);
  useDataLoader(setLink, links);

  return (
    <ProjectsContext.Provider
      value={{
        project,
        skill,
        text,
        info,
        link,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsProvider };

export default ProjectsContext;
