import React from "react";
import { projects } from "./data";
import ProjectCard from "./components/ProjectCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1>Xiaojia Li's Portfolio</h1>
      </nav>

      <main className="portfolio-container">
        <section className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
