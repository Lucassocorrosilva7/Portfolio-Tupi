import "./project.scss";
import Card from "../components/Card";
import useProjects from "../hooks/useProjects";
import Navbar from "@/components/Navbar";

const Project = () => {
  const { project } = useProjects();

  return (
    <>
      <div className="projects">
        <h2 className="projects__heading container">Projetos</h2>
        <div className="project container">
          {project.length > 0 ? (
            <Card projects={project} />
          ) : (
            <p>Carregando projetos...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Project;
