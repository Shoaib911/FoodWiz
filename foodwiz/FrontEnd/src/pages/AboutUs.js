import React from 'react';
import '../style/about.css'; // Import your CSS file

const About = () => {
  return (
    <div className="about-container">
      <h2>About FoodWiz</h2>
      <p>Welcome to FoodWiz, your ultimate culinary companion! At FoodWiz, we believe that cooking should be fun, accessible, and endlessly creative. That's why we've created an AI-powered platform that offers a range of features to cater to your cooking needs.</p>
      
      <h3>Features</h3>
      
      <h4>Pantry Chef</h4>
      <p>Pantry Chef is your go-to feature for creating delicious meals with the ingredients you have on hand. Simply input your available ingredients, preferred meal type, kitchen tools, skill level, and available time, and let FoodWiz suggest the perfect recipe for you.</p>
      
      <h4>Macros Chef</h4>
      <p>Macros Chef is designed for those who want to maintain a balanced diet. Input your desired amounts of carbs, fats, proteins, and meal type, and let FoodWiz generate a recipe tailored to your nutritional needs.</p>
      
      <h4>MasterChef</h4>
      <p>With MasterChef, you're in control of the recipe creation process. Input the recipe name, number of servings, preparation time, meal type, and any specific instructions, and FoodWiz will help you craft the perfect dish from start to finish.</p>

      <h3>Our Mission</h3>
      <p>Our mission at FoodWiz is to empower home cooks of all skill levels to explore their culinary creativity, expand their repertoire, and enjoy the process of cooking. We're committed to using cutting-edge technology to make cooking easier, more enjoyable, and more personalized for everyone.</p>
      
      <h3>Join the FoodWiz Community</h3>
      <p>Ready to take your cooking skills to the next level? Join the FoodWiz community today and gain access to a world of culinary inspiration, helpful tips, and delicious recipes. Whether you're a seasoned chef or just starting out in the kitchen, there's something for everyone at FoodWiz!</p>
      
      <p>Have questions, feedback, or just want to say hello? We'd love to hear from you! Drop us a line at <a href="mailto:hello@foodwiz.com">hello@foodwiz.com</a> or connect with us on social media.</p>
    </div>
  );
};

export default About;
