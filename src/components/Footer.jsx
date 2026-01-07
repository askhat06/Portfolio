import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Alex Dev. Built with React & Vite.</p>
            </div>
        </footer>
    );
};

export default Footer;
