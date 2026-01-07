import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="card-header">
                <h3>{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}>
                    <ExternalLink size={20} />
                </a>
            </div>
            <p className="card-description">{project.description}</p>
            <div className="tags">
                {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
