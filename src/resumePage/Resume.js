import "./Resume.css";

export default function Resume() {
  return (
    <div>
      <div className="project-links">
        <a
          href="/resume_xiaojia_li.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </div>
      <embed
        className="pdf-viewer"
        src="/resume_xiaojia_li.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
      />
    </div>
  );
}
