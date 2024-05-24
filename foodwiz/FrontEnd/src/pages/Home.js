import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css'; // Ensure you create and style this CSS file


const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Never Worry About<br />What's for <span className="highlight">Dinner Again!</span></h1>
            <p>Say goodbye to boring meals, with AI-powered recipe recommendations, meal plans creation and more... 100,000+ dinners saved so far.</p>
            <div className="app-buttons">
              <a href="#" className="app-store-button">
                <img src="path-to-appstore-logo.png" alt="App Store" />
              </a>
              <a href="#" className="play-store-button">
                <img src="path-to-playstore-logo.png" alt="Play Store" />
              </a>
            </div>
            <Link to="/Register" className="cta-button">Get Started for free</Link>
          </div>
          <div className="hero-image">
            <img src="path-to-your-hero-image.png" alt="Hero" />
          </div>
        </div>
      </header>
      
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="Pantryimg.png" alt="PantryChef" />
            <div className="feature-content">
              <h3>PantryChef</h3>
              <p>Discover the power of cooking with what you already have with PantryChef. Simply input the ingredients in your pantry and let our app generate a delicious recipe for you.</p>
              <p>Say goodbye to wasted food and money. Start cooking smarter with PantryChef today!</p>
              <Link to="/PantryChefDemo" className="cta-button">Discover PantryChef</Link>
            </div>
          </div>

          <div className="feature-card">
            
            <div className="feature-content">
              <h3>MacrosChef</h3>
              <p>MacrosChef is the perfect tool for anyone looking to hit their macronutrient goals while satisfying their taste buds.</p>
              <p>Generate customized recipes based on your specific macronutrient goals and dietary restrictions.</p>
              <p>Say goodbye to the guesswork of meal preparation and enjoy perfectly balanced, nutritious meals every day with MacrosChef.</p>
              <Link to="/MacrosDemo" className="cta-button">Discover MacrosChef</Link>
            </div>
            <img src="path-to-macroschef-image.jpg" alt="MacrosChef" />
          </div>
          
          <div className="feature-card">
            <img src="path-to-mealplanchef-image.jpg" alt="MealPlanChef" />
            <div className="feature-content">
              <h3>MealPlanChef</h3>
              <p>MealPlanChef is the ultimate meal planning solution for anyone looking to achieve their fitness goals while enjoying delicious, nutritious meals.</p>
              <p>With its customization features, you can build a meal plan that fits your specific fitness goals and dietary requirements, whether it's for a day, a week, or even a month.</p>
              <p>Say goodbye to the hassle of meal planning and enjoy perfectly balanced meals that support your health and wellness goals. Get started with MealPlanChef today!</p>
              <Link to="/MealPlanDemo" className="cta-button">Discover MealPlan Chef</Link>
            </div>
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
