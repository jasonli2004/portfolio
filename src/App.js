import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import Projects from "./Projects";
import About from "./aboutPage/About";
import About_cn from "./aboutPage/About_cn";
import "./App.css";
import Resume from "./resumePage/Resume";
import Resume_cn from "./resumePage/Resume_cn";
// import BeyondCode from "./BeyondCodePage/BeyondCode";
import LanguageSwitcher from "./LanguageSwitcher";
import Projects_cn from "./Project_cn";

// 提取 AppContent 组件，便于在 <BrowserRouter> 内使用 useLocation
function AppContent() {
  const location = useLocation();
  const segments = location.pathname.split("/");
  const currentLang = segments[1] === "zh" ? "zh" : "en";

  return (
    <div className="App">
      <LanguageSwitcher />

      <h1 id="title">
        {currentLang === "zh" ? "💻 创作空间 🎨" : "Xiaojia Li's Portfolio"}
      </h1>

      {/* ✅ 动态语言导航栏 */}
      <ul>
        <li>
          <Link to={`/${currentLang}/about`}>
            {currentLang === "zh" ? "关于我" : "About"}
          </Link>
        </li>
        <li>
          <Link to={`/${currentLang}`}>
            {currentLang === "zh" ? "个人项目" : "Projects"}
          </Link>
        </li>
        <li>
          <Link to={`/${currentLang}/resume`}>
            {currentLang === "zh" ? "简历" : "Resume"}
          </Link>
        </li>
      </ul>

      <main className="portfolio-container">
        <Routes>
          <Route path="/" element={<Navigate to="/en" />} />

          {/* English */}
          <Route path="/en" element={<Projects />} />
          <Route path="/en/about" element={<About />} />
          <Route path="/en/resume" element={<Resume />} />

          {/* Chinese */}
          <Route path="/zh" element={<Projects_cn />} />
          <Route path="/zh/about" element={<About_cn />} />
          <Route path="/zh/resume" element={<Resume_cn />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
