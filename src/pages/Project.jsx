import "./project.scss";
import Card from "../components/Card";
import useProjects from "../hooks/useProjects";

const Project = () => {
  const { project } = useProjects();

  return (
    <div className="projects">
      <div className="project container">
        {project.length > 0 ? (
          <Card projects={project} />
        ) : (
          <p>Carregando projetos...</p>
        )}
      </div>
    </div>
  );
};

export default Project;
