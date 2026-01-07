import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container">
            <div className="contact-container">
                <h1>Get In Touch</h1>
                <p>
                    I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <a href="mailto:hello@example.com" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
                    Say Hello
                </a>

                <div className="social-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github size={32} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={32} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter size={32} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
