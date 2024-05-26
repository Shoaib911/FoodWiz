import React, { useState } from "react";
import '../style/Chef.css';
import Sidebar from '../components/Sidebar';

const MacrosChef = () => {
  const [showOutput, setShowOutput] = useState(false);
  const [carbs, setCarbs] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [meal, setMeal] = useState('');

  const handleGenerateRecipe = (e) => {
    e.preventDefault(); // Prevent form submission
    setShowOutput(true);
  };

  const handleAddDetails = () => {
    // Save the input values to variables or state
    console.log(`Carbs: ${carbs}, Protein: ${protein}, Fat: ${fat}, Meal: ${meal}`);
    // Reset input values if needed
    // setCarbs('');
    // setProtein('');
    // setFat('');
    // setMeal('');
  };

  return (
    <div className="chef-page">
      <Sidebar />
      <div className="chef-content">
        <div className="header">
          <div className="title">MacrosChef</div>
          <div className="account">Sign in</div>
        </div>
        <form>
          <div className="form-section">
            <div className="text">
              <div className="step-no">1</div>
              <div className="text-description">
                Select your target macronutrient you want to achieve.
              </div>
            </div>
            <div className="inputs">
              <div className="input-container">
                <label>Carbs:</label>
                <div className="input-group">
                  <input type="text" placeholder="20" value={carbs} onChange={(e) => setCarbs(e.target.value)} />
                  <span>grams</span>
                </div>
              </div>
              <div className="input-container">
                <label>Protein:</label>
                <div className="input-group">
                  <input type="text" placeholder="20" value={protein} onChange={(e) => setProtein(e.target.value)} />
                  <span>grams</span>
                </div>
              </div>
              <div className="input-container">
                <label>Fat:</label>
                <div className="input-group">
                  <input type="text" placeholder="20" value={fat} onChange={(e) => setFat(e.target.value)} />
                  <span>grams</span>
                </div>
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="text">
              <div className="step-no">2</div>
              <div className="text-description">
                Select what meal you want to cook.
              </div>
            </div>
            <div className="inputs">
              <select value={meal} onChange={(e) => setMeal(e.target.value)}>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <div className="text">
              <div className="step-no">3</div>
              <div className="text-description">
                Generate your Recipe.
              </div>
            </div>
            <div className="inputs">
              <button onClick={handleGenerateRecipe}>Generate Recipe</button>
              <button type="button" onClick={handleAddDetails}>Add Details</button>
            </div>
          </div>
        </form>

        {showOutput && (
          <div className="output">
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

export default MacrosChef;
