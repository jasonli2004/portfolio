import React from "react";
import { projects } from "./data";
import ProjectCard from "./components/ProjectCard";

function Projects() {
  return (
    <section className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
}

export default Projects;
