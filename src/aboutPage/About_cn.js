import React from "react";
import "./About.css";

function About_cn() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-left">
          <img src="/headshot.jpg" alt="Xiaojia Li" className="profile-image" />
        </div>
        <div className="about-right">
          <h1>自我介绍</h1>
          <p className="intro-text">
            我是<span className="highlight">李小佳</span>，目前就读于
            <span className="highlight">卡尔顿学院(Carleton College)</span>,
            主修<span className="highlight">计算机科学</span>。
          </p>
          <p className="description-text">
            我热爱<span className="highlight">软件开发</span>，有多段实习经历，
            曾参与集成<span className="highlight">AI功能</span>
            、打造直观的用户界面等项目。
            这些经历不仅锻炼了我的技术能力，也让我在面对问题时更加灵活高效，
            能够迅速上手并适应
            <span className="highlight">各种新技术与开发框架</span>。
            我乐于将创意与前沿技术结合，专注于打造以用户为核心的流畅体验。
          </p>
          <p className="description-text">
            编程之外，我也是一名热爱
            <span className="highlight">摄影</span>的创作者，
            擅长风景、人像与体育摄影。同时，我是校内
            <span className="highlight">飞盘</span>与
            <span className="highlight">乒乓球队</span>
            的成员，享受运动带来的乐趣与团队协作。
          </p>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/xiaojia-li-8783a821a/" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="LinkedIn" className="social-icon" src="/linkedin.png" />
            </a>
            <a href="https://github.com/jasonli2004" rel="noopener noreferrer">
              <img alt="Github" className="social-icon" src="/github.png" />
            </a>
            <a href="mailto:lil4@carleton.edu?subject=Hello&body=Hi%20there%2C%20I%20wanted%20to%20connect.">
              <img alt="Email" className="social-icon" src="/email.webp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_cn;
