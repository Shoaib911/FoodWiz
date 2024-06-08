import React from 'react';
import "../style/Blog.css"; // Import the CSS for styling
import B1 from "../assets/images/Blog1.jpg";
import B2 from "../assets/images/Blog2.jpg";
import B3 from "../assets/images/Blog3.jpg";
import B4 from "../assets/images/Blog4.jpg";
import B5 from "../assets/images/Blog5.jpg";
import B6 from "../assets/images/Blog6.jpg";
import B7 from "../assets/images/Blog7.jpg";
import B8 from "../assets/images/Blog8.jpg";
const Blog = () => {
  return (
    <div className="blog-page">
      <h2>Blog</h2>

      <div className="blogs">

        <div className="blog-content">
          <img src={B1} alt="Blog 1" />
          <div className="blog-title">Egyptian Recipes for Koshari Lovers</div>
          <p className="blog-date">Jun 7, 2024 · 3 min read · 🧑‍🍳 Recipes</p>
          <p className="blog-description">Discover the rich and flavorful world of Egyptian cuisine with these delicious koshari recipes.</p>
        </div>

        <div className="blog-content">
          <img src={B2} alt="Blog 2" />
          <div className="blog-title">Vietnamese Recipes for Pho Bo Lovers</div>
          <p className="blog-date">Jun 7, 2024 · 2 min read · 🧑‍🍳 Recipes</p>
          <p className="blog-description">Discover the best Vietnamese recipes for pho bo lovers and learn how to make them at home with FoodWiz recipe creation capabilities.</p>
        </div>

        <div className="blog-content">
          <img src={B3} alt="Blog 3" />
          <div className="blog-title">Exploring the Delicious World of Scottish Recipes</div>
          <p className="blog-date">Jun 6, 2024 · 2 min read . 🧑‍🍳 Recipes</p>
          <p className="blog-description">Discover the rich and hearty flavors of Scottish cuisine with these traditional recipes that are sure to warm your soul and satisfy your taste buds.</p>
        </div>

        <div className="blog-content">
          <img src={B4} alt="Blog 4" />
          <div className="blog-title">What to Serve with Teriyaki Chicken?</div>
          <p className="blog-date">Jun 6, 2024 · 2 min read . 🧑‍🍳 Recipes</p>
          <p className="blog-description">Teriyaki chicken is a delicious and easy dish to make, but what should you serve with it? Here are some ideas to elevate your meal.</p>
        </div>

        <div className="blog-content">
          <img src={B5} alt="Blog 5" />
          <div className="blog-title">Easy Danish Recipes</div>
          <p className="blog-date">Jun 5, 2024 · 2 min read . 🧑‍🍳 Recipes</p>
          <p className="blog-description">Discover the delicious world of Danish cuisine with these easy-to-follow recipes that will transport your taste buds to Scandinavia.</p>
        </div>

        <div className="blog-content">
          <img src={B6} alt="Blog 6" />
          <div className="blog-title">Malaysian Recipes for a Tantalizing Malaysian Night Market Experience</div>
          <p className="blog-date">Jun 5, 2024 · 2 min read . 🧑‍🍳 Recipes</p>
          <p className="blog-description">Experience the tantalizing flavors of Malaysian night markets with these delicious recipes that are sure to transport you to the bustling streets of Malaysia.</p>
        </div>

        <div className="blog-content">
          <img src={B7} alt="Blog 7" />
          <div className="blog-title">Basil Recipes: Adding a Fresh Twist to Your Meals</div>
          <p className="blog-date">Jun 4, 2024 · 2 min read . 🧑‍🍳 Recipes</p>
          <p className="blog-description">Basil is a versatile herb that can add a fresh and aromatic twist to any dish. In this blog post, we'll explore some delicious basil recipes that are easy to make and perfect for any occasion.</p>
        </div>

        <div className="blog-content">
          <img src={B8} alt="Blog 8" />
          <div className="blog-title">Moroccan Recipes for an Exotic Dinner</div>
          <p className="blog-date">Jun 4, 2024 · 2 min read . 🧑‍🍳 Recipes</p>
          <p className="blog-description">Spice up your dinner routine with these delicious Moroccan recipes that will transport you to the exotic land of Morocco.</p>
        </div>

      </div>
    </div>
  );
};

export default Blog;
