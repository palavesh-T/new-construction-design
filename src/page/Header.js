import React, { useState, useEffect } from 'react';
import { Link, useLocation ,useNavigate } from 'react-router-dom';
import "../assete/css/header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            if (menuOpen) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [menuOpen]);

    const navigate = useNavigate();

    const construction = () => {
      navigate("");
   
      
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    };
  return (
   <>
    <header className={`construction_header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                {/* <img src={logo} alt="logo" /> */}
                <nav>
                    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li className={location.pathname === "../Home" ? "active" : ""}><Link to="/Home" onClick={construction}>Home</Link></li>
              <li className={location.pathname === "../About" ? "active" : ""}><Link to="/About" onClick={construction} >About</Link></li>
              <li className={location.pathname === "../Service" ? "active" : ""}><Link to="/Service" onClick={construction}>Service</Link></li>
              <li className={location.pathname === "../Contact" ? "active" : ""}>
              <Link to="/Contact" onClick={construction} >Contact</Link></li>
                    </ul>
                    <div className="menu-icon" onClick={toggleMenu}>
                        &#9776;
                    </div>
                </nav>
            </div>
        </header>
   
   </>
  )
}

export default Header