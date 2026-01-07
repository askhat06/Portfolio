import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization using D3.js and React. Integrates with Firebase for backend data.",
        tags: ["React", "D3.js", "Firebase"],
        link: "#"
    },
    {
        title: "Task Master AI",
        description: "An AI-powered todo list application that prioritizes tasks based on your habits and deadlines. Built with Typescript and OpenAI API.",
        tags: ["TypeScript", "OpenAI API", "Node.js"],
        link: "#"
    },
    {
        title: "Weather Minimal",
        description: "A lightweight weather application focused on typography and clean UI design. Fetches real-time data from OpenWeatherMap.",
        tags: ["Vue", "Weather API", "CSS Modules"],
        link: "#"
    }
];

const Projects = () => {
    return (
        <div className="container">
            <div className="projects-header">
                <h1>Projects</h1>
                <p>Some things I've built.</p>
            </div>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
