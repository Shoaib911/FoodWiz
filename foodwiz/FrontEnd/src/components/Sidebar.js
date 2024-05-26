import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Sidebar.css"; // Import the CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to="/" className="logo-link">
          <img src='path-to-your-logo.png' alt="Logo" className="logo-image" />
          <h2>FoodWiz</h2>
        </Link>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="//PantryChef">PantryChef</Link>
          </li>
          <li>
            <Link to="/MacrosChef">MacrosChef</Link>
          </li>
          <li>
            <Link to="/MasterChef">MealPlanChef</Link>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Sidebar;
