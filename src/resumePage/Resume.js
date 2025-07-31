import "./Resume.css";

export default function Resume() {
  return (
    <div>
      <div className="project-links">
        <a
          href="https://drive.google.com/file/d/1Gam77MqZbpAh1Q0wKtr9K_ePTR5fmXHc/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume PDF
        </a>
      </div>
      <embed
        className="pdf-viewer"
        src="https://drive.google.com/file/d/1Gam77MqZbpAh1Q0wKtr9K_ePTR5fmXHc/preview"
        type="application/pdf"
        width="100%"
        height="600px"
      />
    </div>
  );
}
