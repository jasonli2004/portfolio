import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p className="description">{project.description}</p>

      <div className="tech-stack">
        {project.tech.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        {/* 条件渲染 Demo 链接 */}{" "}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaExternalLinkAlt /> Demo{" "}
          </a>
        )}
        {/* <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt /> Demo
        </a> */}
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> Github
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
