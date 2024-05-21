import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'path-to-your-logo.png'; // Update with your actual logo path
import '..style/Sidebar.css'; // Import the CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-image" />
          <h2>Title</h2>
        </Link>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/PantryChefDemo">PantryChef</Link>
          </li>
          <li>
            <Link to="/MacrosDemo">MacrosChef</Link>
          </li>
          <li>
            <Link to="/MealPlanDemo">MealPlanChef</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
