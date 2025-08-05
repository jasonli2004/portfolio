import { useLocation, useNavigate } from "react-router-dom";

const LanguageSwitcher = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const segments = location.pathname.split("/");
  const currentLang = segments[1] === "zh" ? "zh" : "en";
  const newLang = currentLang === "en" ? "zh" : "en";

  const newPath = "/" + [newLang, ...segments.slice(2)].join("/");

  const handleClick = () => {
    navigate(newPath);
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      <span style={currentLang === "zh" ? inactiveStyle : activeStyle}>EN</span>
      {" / "}
      <span style={currentLang === "zh" ? activeStyle : inactiveStyle}>中</span>
    </button>
  );
};

const buttonStyle = {
  position: "absolute",
  top: "20px",
  right: "20px",
  background: "none",
  border: "none",
  fontSize: "1rem",
  cursor: "pointer",
  color: "#555",
  padding: 0,
};

const activeStyle = {
  color: "#007bff", // 蓝色
  fontWeight: "bold",
};

const inactiveStyle = {
  color: "#999",
};

export default LanguageSwitcher;
