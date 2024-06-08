import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import "../style/Sidebar.css"; // Import the CSS for styling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="Logo">
            <img src={logo} alt="Logo" className="Logo-image" />
            <h1>Food<span className='Primary-text'>Wiz</span></h1>
          </Link>
        </div>
        <nav className="sidebar-nav">
          <Link to="/PantryChef">PantryChef</Link>
          <Link to="/MacrosChef">MacrosChef</Link>
          <Link to="/MasterChef">MasterChef</Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
