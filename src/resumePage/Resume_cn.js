import "./Resume.css";

export default function Resume_cn() {
  return (
    <div>
      <div className="project-links">
        <a href="/resume_cn.pdf" target="_blank" rel="noopener noreferrer">
          下载pdf
        </a>
      </div>
      <embed
        className="pdf-viewer"
        src="/resume_cn.pdf"
        type="application/pdf"
        width="100%"
        height="600px"
      />
    </div>
  );
}
