import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import About from "./aboutPage/About";
import "./App.css";
import Resume from "./resumePage/Resume";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 id="title">Xiaojia Li's Portfolio</h1>

        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>

        <main className="portfolio-container">
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
