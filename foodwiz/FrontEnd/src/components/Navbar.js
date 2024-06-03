import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../style/Navbar.css'; // Ensure you have this CSS file for styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" className="logo-image" />
            <h1>Food<span className="Primary-text">Wiz</span></h1>
          </Link>

          <div className="menu-icon" onClick={handleMenuToggle}>
            &#9776; {/* Unicode character for bars icon */}
          </div>
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <div className="dropdown">
            <span className="dropdown-toggle">Features</span>
            <div className="dropdown-menu">
              <Link to="/PantryDemo" className="dropdown_item">PantryChef</Link>
              <Link to="/MasterDemo" className="dropdown_item">MasterChef</Link>
              <Link to="/MacrosDemo" className="dropdown_item">MacrosChef</Link>
            </div>
          </div>
          <Link to="/Blog">Blog</Link>
          <Link to="/AboutUs">About Us</Link>
          <Link to="/Login" className="login-button">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
