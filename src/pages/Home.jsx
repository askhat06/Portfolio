import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <div className="hero">
                <span className="hero-intro">Hi, my name is</span>
                <h1>Alex Dev.<br />I build things for the web.</h1>
                <p style={{ maxWidth: '600px' }}>
                    I'm a frontend engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
                </p>
                <div className="cta-buttons">
                    <Link to="/projects" className="btn btn-primary">Check out my work</Link>
                    <Link to="/contact" className="btn btn-outline">Get in touch</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
