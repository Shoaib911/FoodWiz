import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../style/Pantry.css';

const PantryChef = () => {
  const [ingredients, setIngredients] = useState([]);
  const [meal, setMeal] = useState('Lunch');
  const [tools, setTools] = useState({
    stoveTop: false,
    oven: false,
    microwave: false,
    airFryer: false,
    sousVide: false,
    blender: false,
    foodProcessor: false,
    bbq: false,
    slowCooker: false,
    pressureCooker: false,
  });
  const [showOutput, setShowOutput] = useState(false);
  const [time, setTime] = useState(5);
  const [chefLevel, setChefLevel] = useState('Novice');

  const handleToolChange = (tool) => {
    setTools((prevTools) => ({ ...prevTools, [tool]: !prevTools[tool] }));
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    const ingredient = e.target.elements.ingredient.value;
    if (ingredient) {
      setIngredients([...ingredients, ingredient]);
      e.target.elements.ingredient.value = '';
    }
  };
  const handleGenerateRecipe = () => {
    setShowOutput(true);
  };

  return (
    <div className="chef-page">
      <Sidebar />
      <div className="chef-content">
        <h2>PantryChef Page</h2>
        <form onSubmit={handleAddIngredient}>
          <div className="form-section">
            <label>What ingredients do you have?</label>
            <input type="text" name="ingredient" placeholder="Search or add ingredient" />
            <button type="submit">Add Ingredient</button>
          </div>
          <div className="form-section">
            <label>What meal do you want to cook?</label>
            <select value={meal} onChange={(e) => setMeal(e.target.value)}>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
          </div>
          <div className="form-section">
            <label>What kitchen tools do you have?</label>
            <div className="checkbox-container">
              {Object.keys(tools).map((tool) => (
                <div key={tool}>
                  <input
                    type="checkbox"
                    id={tool}
                    checked={tools[tool]}
                    onChange={() => handleToolChange(tool)}
                  />
                  <label htmlFor={tool}>{tool.replace(/([A-Z])/g, ' $1').trim()}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="form-section">
            <label>How much time do you have?</label>
            <input
              type="range"
              min="1"
              max="60"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <span>{time} minutes</span>
          </div>
          <div className="form-section">
            <label>Are you a good chef?</label>
            <select value={chefLevel} onChange={(e) => setChefLevel(e.target.value)}>
              <option value="Novice">Novice</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <button onClick={handleGenerateRecipe}>Generate Recipe</button>

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
        </form>
        
      </div>
    </div>
  );
};

export default PantryChef;
