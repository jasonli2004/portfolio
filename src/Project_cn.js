import React from "react";
import { projects } from "./data_cn";
import ProjectCard from "./components/ProjectCard";

function Projects_cn() {
  return (
    <section className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
}

export default Projects_cn;
