import React from 'react';
import '../style/Footer.css'; // Ensure you create and style this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="path-to-your-logo.png" alt="Logo" className="footer-logo-image" />
          <h1>FoodWiz</h1>
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
            <h3>Product</h3>
            <ul>
              <li><a href="/Pricing">Pricing</a></li>
              <li><a href="/FAQ">FAQ</a></li>
              <li><a href="/API">API</a></li>
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
