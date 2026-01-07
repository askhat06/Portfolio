import React from 'react';

const About = () => {
    const skills = [
        "JavaScript (ES6+)",
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "HTML & CSS",
        "Git",
        "Figma"
    ];

    return (
        <div className="container">
            <div className="about-content">
                <div>
                    <h1>About Me</h1>
                    <p>
                        Hello! My name is Alex and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS was quite fun!
                    </p>
                    <p>
                        Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                    </p>
                    <p>
                        Here are a few technologies I've been working with recently:
                    </p>
                    <ul className="skills-list">
                        {skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="about-image">
                    {/* Placeholder for an image if the user wants one later */}
                </div>
            </div>
        </div>
    );
};

export default About;
