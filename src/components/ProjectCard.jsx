import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import './ProjectCard.css';

function ProjectCard({ project, onClick }) {
  const { title, category, description, image, tags } = project;

  return (
    <article className="project-card" onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}>
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" loading="lazy" />
        <div className="project-overlay">
          <span className="project-view-details">
            View Details <ArrowRight size={16} />
          </span>
        </div>
      </div>
      <div className="project-card-content">
        <span className="project-category">{category}</span>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
