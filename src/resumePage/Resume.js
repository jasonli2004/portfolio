import "./Resume.css";

export default function Resume() {
  return (
    <div>
      <div className="project-links">
        <a
          href="https://drive.google.com/file/d/1aXtERnje1kXl3ZHzXYSnWYVvFV8uYvUw/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </div>
      <embed
        className="pdf-viewer"
        src="https://drive.google.com/file/d/1aXtERnje1kXl3ZHzXYSnWYVvFV8uYvUw/view?usp=sharing"
        type="application/pdf"
        width="100%"
        height="600px"
      />
    </div>
  );
}
