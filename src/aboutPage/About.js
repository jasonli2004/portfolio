import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-left">
          <img
            src="./headshot.jpg"
            alt="Xiaojia Li"
            className="profile-image"
          />
        </div>
        <div className="about-right">
          <h1>About Me</h1>
          <p className="intro-text">
            Hi! I'm <span className="highlight">Xiaojia Li</span>, a senior at
            <span className="highlight"> Carleton College</span>, pursuing a
            <span className="highlight"> BA in Computer Science & Math.</span>{" "}
          </p>
          <p className="description-text">
            I have hands-on experience in{" "}
            <span className="highlight">software development</span>, integrating
            <span className="highlight"> AI-driven functionalities</span>, and
            creating intuitive user interfaces. My internship experiences have
            sharpened my technical skills, strengthened my ability to deliver
            impactful solutions, and demonstrated my capacity to quickly learn
            and adapt to{" "}
            <span className="highlight">new technologies and frameworks</span>.
            I am passionate about blending creativity and cutting-edge
            technology to craft seamless, user-focused designs.
          </p>
          <p className="description-text">
            Besides coding, I'm an avid{" "}
            <span className="highlight">photographer</span>, focusing on
            landscape, portrait, and sports photography. I'm also a frisbee and
            table tennis player on my college teams.
          </p>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/xiaojia-li-8783a821a/" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="LinkedIn"
                className="social-icon"
                src="./linkedin.png"
              />
            </a>
            <a href="https://github.com/jasonli2004" rel="noopener noreferrer">
              <img alt="Github" className="social-icon" src="./github.png" />
            </a>
            <a href="mailto:lil4@carleton.edu?subject=Hello&body=Hi%20there%2C%20I%20wanted%20to%20connect.">
              <img alt="Email" className="social-icon" src="./email.webp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
