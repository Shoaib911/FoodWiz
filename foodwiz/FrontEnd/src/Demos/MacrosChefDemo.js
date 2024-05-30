import React, { useState } from "react";
import '../style/Demo.css';
import macro from "../assets/images/macros.png";
const MacrosDemo = () => {

  const [showOutput, setShowOutput] = useState(false)
  const handleGenerateRecipe = () => {
    setShowOutput(true);
  };
    return (
         <div>
        
        <div className="container">
          <div className="About">
            <span className="Primary_text">MacrosChef</span>
            <br></br>
            <br></br>
            <h1>
               Hit Your Macros
              <span className="Primary_text">The Simple Way!</span>
            </h1>
            <p>
            When you struggle to reach your macros, MacrosChef is here to help. You can generate recipes that are specifically designed to help you achieve your macronutrient goals. No more guessing or struggling to find the right balance!

            </p>
          </div>
          <div className="about_image">
          <img src={macro} alt="MacrosChef" />
          </div>
        </div>
        
        <div className="Steps">

          <div className="step-container">
            <div className="text_box">
              <div className="step-no">1</div>
                <span className="step-description">
                Select your target macronutrient you want to achieve.
                </span>
                <p>
                Tell MacrosChef the amount in grams of Carbohydrates, Proteins and Fats that your meal should have.

                </p>
                <p>
                MacrosChef will craft the prefect recipe that achieve your macronutrients goal!
                </p>
            </div>
            <div className="input-demo-div">
            
            <div className="input_container">
              
                <label >Carbs:</label>
                <div className="input_group">
                  <input type="text" placeholder="20"  />
                  <span>grams</span>
                </div>
              </div>
              <div className="input_container">
                <label>Protein:</label>
                <div className="input_group">
                  <input type="text" placeholder="20"  />
                  <span>grams</span>
                </div>
              </div>
              <div className="input_container">
                <label>Fat:</label>
                <div className="input_group">
                  <input type="text" placeholder="20"  />
                  <span>grams</span>
                </div>
              </div>
              
            </div>
          </div>

            <div className="step-container">
            <div className="text_box">
              <div className="step-no">2</div>
                <span className="step-description">
                Select what meal you want to cook.
                </span>
                <p>
                You can select Breakfast, Lunch, Snack or Dinner.
                </p>
                <p>
                MasterChef will generate a recipe with the right amount of ingredients to yield the desired amount of servings.
                </p>
            </div>
            <div className="input-demo-div">
            <select className="select-demo">
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Snack</option>
                <option>Dinner</option>
              </select>
            </div>
        </div>

       
        
        <div className="step-container">
            <div className="text_box">
              <div className="step-no">3</div>
                <span className="step-description">
                Generate your Recipe.
                </span>
                <p>
                Press the Generate button and wait for the magic to happen.
                </p>
                <p>
                With one click you can save your Recipe in the Cookbook or add it to the Shopping List. And if you want to order the ingredients online, you can add all the ingredients to your AmazonFresh or InstaCart shopping cart too!
                </p>
            </div>
            <div className="input-demo-div">
            <button className="output-button" onClick={handleGenerateRecipe}>Generate Recipe</button>
            </div>
        </div>

        {showOutput && (<div className="Output">
        <h3>Avocado Toast with Scrambled Tofu</h3>
            <h2>Ingredients</h2>
            <ol>
              <li>2 slices whole grain bread</li>
              <li>150 grams firm tofu</li>
              <li>1 medium avocado</li>
              <li>2 teaspoons olive oil</li>
              <li>Spices and seasonings to taste</li>
            </ol>
            <h2>Instructions</h2>
            <ol>
              <li>Toast the bread slices in a toaster until crispy.</li>
              <li>In a frying pan, heat some oil and add the crumbled tofu.</li>
              <li>Cook the tofu on medium heat for 3-5 minutes, until lightly browned.</li>
              <li>Add the spices and seasonings of your choice to the tofu, such as turmeric, paprika, salt, and pepper.</li>
              <li>Continue cooking the tofu for another 2-3 minutes, until well seasoned and slightly crispy.</li>
              <li>Meanwhile, slice the avocado and mash it with a fork in a small bowl.</li>
              <li>Spread the mashed avocado on the toasted bread slices.</li>
              <li>Serve and enjoy!</li>
            </ol>
            <h2>Macros:</h2>
            <ol>
              <li>Total Calories: 351kcal</li>
              <li>Carbs: 34 grams</li>
              <li>Proteins: 20 grams</li>
              <li>Fats: 15 grams</li>
            </ol>
          </div>

    )}
        </div>
      </div>
    );
  };
  
  export default MacrosDemo;