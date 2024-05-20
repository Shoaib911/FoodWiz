import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../style/Navbar.css'; // Ensure you have this CSS file for styling

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo">
            <img src="path-to-your-logo.png" alt="Logo" className="logo-image" />
            <h1>FoodWiz</h1>
          </Link>
          <nav className="nav-links">
            <div className="dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
              <span className="dropdown-toggle">Features</span>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/PantryChefDemo" className="dropdown-item">PantryChef</Link>
                  <Link to="/MealPlanDemo" className="dropdown-item">MealPlanChef</Link>
                  <Link to="/MacrosDemo" className="dropdown-item">MacrosChef</Link>
                </div>
              )}
            </div>
            <Link to="/Blog">Blog</Link>
            <Link to="/AboutUs">About Us</Link>
          </nav>
          <Link to="/Login" className="login-button">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;