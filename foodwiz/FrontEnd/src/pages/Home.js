import React from 'react';
import { Link } from 'react-router-dom';
import HomeImg from '../assets/images/Home.png';
import masterimg from "../assets/images/Master.png";
import macro from "../assets/images/macros.png";
import pantry from "../assets/images/pantry.png";

import '../style/Home.css'; // Ensure you create and style this CSS file


const Home = () => {
  return (
    <div className='Home'>   
        <div className="Container">
          <div className="about">
            <span className="Primary-text">Meet FOODWIZ</span>
            <h1>
            Never Worry About
              <span className="Primary-text">What's for Dinner Again!</span>
            </h1>
            <p>
            Say goodbye to boring meals, with AI-powered recipe recommendations, meal plans creation and more... 100,000+ dinners saved so far.
            </p>
            <br></br>
            <Link to="/Register" className="cta-button">Get Started for free</Link>
          </div>
          <div className="about_image">
            <img src={HomeImg} alt="Home" />
          </div>
        </div>


      
      
      <section className="features">
        <h2>Our Features</h2>
        <p>More than just Recipes</p>
        <p>Simply Put, FoodWiz It's your new Personal Chef.</p>
        <div className="feature-cards">


          <div className="feature-card">
            <div className='image-div'>
            <img src={pantry} alt="PantryChef" />
            </div>
            <div className="feature-content">
              <h3>PantryChef</h3>
              <p>Discover the power of cooking with what you already have with PantryChef. Simply input the ingredients in your pantry and let our app generate a delicious recipe for you.</p>
              <p>Say goodbye to wasted food and money. Start cooking smarter with PantryChef today!</p>
              <br></br>
              <Link to="/PantryDemo" className="cta-button">Discover PantryChef</Link>
            </div>
          </div>


          <div className="feature-card">
            
            <div className="feature-content">
              <h3>MacrosChef</h3>
              <p>MacrosChef is the perfect tool for anyone looking to hit their macronutrient goals while satisfying their taste buds.</p>
              <p>Generate customized recipes based on your specific macronutrient goals and dietary restrictions.</p>
              <p>Say goodbye to the guesswork of meal preparation and enjoy perfectly balanced, nutritious meals every day with MacrosChef.</p>
              <br></br>
              <Link to="/MacrosDemo" className="cta-button">Discover MacrosChef</Link>
            </div>
            <div className='image-div'>
               <img src={macro} alt="MacrosChef" />
            </div>
            
          </div>
          
          <div className="feature-card">
            <div className='image-div'>
                <img src={masterimg} alt="MasterChef" />
            </div>
            
            <div className="feature-content">
              
                <h3>MasterChef</h3>
                <p>Masterchef is the ultimate cooking companion for anyone looking to elevate their culinary skills.</p>
                <p>Say goodbye to endless Googling for the perfect recipe. Masterchef’s helps you find the specific recipe you’re looking for, modify it based on your dietary requirements, or generate a new recipe based on your cravings. With Masterchef, you'll have access to personalized, healthy, and delicious recipes that fit your lifestyle.</p>
                <p>Cook smarter, not harder with Masterchef.</p>
                <br></br>
              <Link to="/MasterDemo" className="cta-button">Discover Master Chef</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonials">

        <span className='Primary-text'>TESTIMONIALS</span>
        <h2>What Our Users Say</h2>
        <p>Hear directly from our customers</p>

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
