import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import '../style/Footer.css'; // Ensure you create and style this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <Link to="/" className="Logo">
            <img src={logo} alt="Logo" className="Logo_image" />
            <h1>Food<span className='Primary-text'>Wiz</span></h1>
          </Link>
          <p>Your AI Powered Digital Chef</p>
          <p>© Copyright 2024 FoodWiz. All Rights Reserved.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>About Us</h3>
            <ul>
              <li><a href="/Blog">Blog</a></li>
              <li><a href="/Contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>              
            </ul>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="/Terms">Terms</a></li>
              <li><a href="/Privacy">Privacy</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
