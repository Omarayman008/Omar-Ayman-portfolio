
import React from 'react';

interface Project {
  name: string;
  tech: string;
  description: string;
  link: string;
  color: string;
}

const ProjectsSection: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <section className="section" id="projects-grid">
      <div className="container">
        <h2 className="text-accent">02.5 _PROJECT_ARCHIVE</h2>
        <div className="projects-display-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card-premium" style={{ '--accent-color': project.color } as any}>
              <div className="card-border"></div>
              <div className="card-content">
                <div className="project-header">
                  <span className="project-id">PROJ_0{index + 1}</span>
                  <div className="status-indicator"></div>
                </div>
                <h3 className="project-title">{project.name}</h3>
                <p className="project-tech">{project.tech}</p>
                <p className="project-desc">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>INITIATE_VIEW</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default ProjectsSection;
