import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css'; // Ensure you create and style this CSS file

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to FoodWiz</h1>
          <p>Your AI-powered personal chef, ready to revolutionize your cooking experience.</p>
          <Link to="/Register" className="cta-button">Get Started</Link>
        </div>
      </header>
      
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="path-to-pantrychef-image.jpg" alt="PantryChef" />
            <h3>PantryChef</h3>
            <p>Create recipes based on the ingredients you already have.</p>
            <Link to="/pantrychef-demo" className="cta-button">Demo</Link>
          </div>
          
          <div className="feature-card">
            <img src="path-to-macroschef-image.jpg" alt="MacrosChef" />
            <h3>MacrosChef</h3>
            <p>Generate recipes tailored to your macronutrient goals.</p>
            <Link to="/macroschef-demo" className="cta-button">Demo</Link>
          </div>
          
          <div className="feature-card">
            <img src="path-to-mealplanchef-image.jpg" alt="MealPlanChef" />
            <h3>MealPlanChef</h3>
            <p>Create personalized meal plans effortlessly.</p>
            <Link to="/mealplanchef-demo" className="cta-button">Demo</Link>
          </div>
        </div>
      </section>
      
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"FoodWiz has transformed my cooking experience!"</p>
            <span>- Zaky M., Head of Growth at Matrixport</span>
          </div>
          <div className="testimonial">
            <p>"My wife and sister-in-law love FoodWiz!"</p>
            <span>- Gideon S.W., Marketer at Snap</span>
          </div>
          <div className="testimonial">
            <p>"Now this is a good use of AI!"</p>
            <span>- Joe D., Startup Founder</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
