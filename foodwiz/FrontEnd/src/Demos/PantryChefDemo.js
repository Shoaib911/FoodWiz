import React, { useState } from "react";
import Navbar from "../components/Navbar";
import '../style/Pantrydemo.css';

const PantryDemo = () => {
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [showAddButton, setShowAddButton] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleAddIngredient = () => {
    if (ingredient.trim()) {
      setIngredients([...ingredients, ingredient.trim()]);
      setIngredient("");
      setShowAddButton(false);
    }
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const handleGenerateRecipe = () => {
    setShowOutput(true);
  };

  return (
    <div>
      <Navbar />
      <div className="feature-card">
        <img src="Pantryimg.png" alt="PantryChef" />
        <div className="feature-content">
          <h3>PantryChef</h3>
          <p>
            Discover the power of cooking with what you already have with
            PantryChef. Simply input the ingredients in your pantry and let our
            app generate a delicious recipe for you.
          </p>
          <p>
            Say goodbye to wasted food and money. Start cooking smarter with
            PantryChef today!
          </p>
        </div>
      </div>

      <div className="steps">
        <div className="step">
          <div className="step-content">
            <div className="text-div">
              <h4>1. Add the ingredients you have at home.</h4>
              <p>
                You can pick ingredients from the list or from your saved
                inventory. Remember: if an ingredient is not available in the
                default list, simply type its name in the search bar and add it.
              </p>
            </div>
            <div className="input-div">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Search or add Ingredient"
                  value={ingredient}
                  onChange={(e) => {
                    setIngredient(e.target.value);
                    setShowAddButton(e.target.value.trim() !== "");
                  }}
                />
                {showAddButton && (
                  <button onClick={handleAddIngredient}>Add</button>
                )}
              </div>
              <div className="ingredient-list">
                <span className="ingredient">
                  Chicken
                  <button>
                    x
                  </button>
                </span>
                {ingredients.map((item, index) => (
                  <span className="ingredient" key={index}>
                    {item}
                    <button onClick={() => handleRemoveIngredient(index)}>
                      x
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-content">
            <div className="text-div">
              <h4>2. Select what meal you want to cook.</h4>
              <p>You can select Breakfast, Lunch, Snack or Dinner. PantryChef will then recommend you a suitable recipe for the meal you have selected.</p>
            </div>
            <div className="input-div">
              <select>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Snack</option>
                <option>Dinner</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="step">
  <div className="step-content">
    <div className="text-div">
      <h4>3. Select the kitchen utensils you have.</h4>
      <p>Pick the kitchen utensils you have or you want to use. This will prevent PantryChef from recommending you recipes using utensils you don't have or don't want to use.</p>
    </div>
    <div className="input-div">
      <div className="utensil-options">
        <label>
          <input type="checkbox" /> Stove Top
        </label>
        <label>
          <input type="checkbox" /> Oven
        </label>
        <label>
          <input type="checkbox" /> Microwave
        </label>
        <label>
          <input type="checkbox" /> Air Fryer
        </label>
        <label>
          <input type="checkbox" /> Sous Vide Machine
        </label>
        <label>
          <input type="checkbox" /> Blender
        </label>
        <label>
          <input type="checkbox" /> Food Processor
        </label>
        <label>
          <input type="checkbox" /> BBQ
        </label>
        <label>
          <input type="checkbox" /> Slow Cooker
        </label>
        <label>
          <input type="checkbox" /> Pressure Cooker
        </label>
      </div>
    </div>
  </div>
</div>


        <div className="step">
          <div className="step-content">
            <div className="text-div">
              <h4>4. Select how much time you have.</h4>
              <p>Select 5 minutes if you are in a rush or longer if you have time.</p>
              <p>This will prevent PantryChef from recommending you recipes that take too long to prepare.</p> 
            </div>
            <div className="input-div">
              <input type="text" placeholder="5 minutes"></input>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-content">
            <div className="text-div">
              <h4>5. Select your skill level.</h4>
              <p>It doesn't matter if you are a Novice or a Michelin Starred Chef.</p>
              <p>PantryChef will recommend you recipes that are suitable for your skill level.</p>
            </div>
            <div className="input-div">
              <select>
                <option>Novice</option>
                <option>Intermediate</option>
                <option>Expert</option> 
              </select>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-content">
            <div className="text-div">
              <h4>6. Generate your Recipe.</h4>
              <p>Press the Generate button and wait for the magic to happen.</p>
            </div>
            <div className="input-div">
              <button onClick={handleGenerateRecipe}>Generate Recipe</button>
            </div>
          </div>
        </div>

        {showOutput && (
          <div className="Output">
            <h3>Cheese and Avocado Sandwich</h3>

            <h2>Ingredients</h2>
            <ol>
              <li>Cheese</li>
              <li>Avocado</li>
              <li>Bread</li>
              <li>Butter</li>
              <li>Spicy Pepper</li>
            </ol>

            <h2>Instructions</h2>
            <ol>
              <li>Toast the bread slices in a toaster.</li>
              <li>Spread butter on one side of each bread slice.</li>
              <li>Slice the avocado and the spicy pepper.</li>
              <li>Grate the cheese.</li>
              <li>Layer the avocado, spicy pepper, and cheese on one bread slice.</li>
              <li>Cover with the other bread slice.</li>
              <li>Cut the sandwich diagonally.</li>
              <li>Serve and enjoy!</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default PantryDemo;
