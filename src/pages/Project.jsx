import "./project.scss";
import Card from "../components/Card";
import { useState } from "react";
import { projects } from "../utils/api";

const Project = () => {
  const [project, setProject] = useState(projects);

  return (
    <div className="projects">
      <div className="project container">
        <Card projects={project} />
      </div>
    </div>
  );
};

export default Project;
