import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="site-header">
            <div className="header-content container">
                <NavLink to="/" className="logo" onClick={closeMenu}>
                    Alex Dev
                </NavLink>

                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav className={`main-nav ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
