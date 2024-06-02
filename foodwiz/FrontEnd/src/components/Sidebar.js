import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import "../style/Sidebar.css"; // Import the CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
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
  );
};

export default Sidebar;
