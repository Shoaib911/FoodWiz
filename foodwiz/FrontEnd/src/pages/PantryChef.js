import React, { useState, useContext } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import { UserContext } from '../components/UserContext'; // import the context
import { useNavigate } from 'react-router-dom';
import '../style/Chef.css';

const PantryChef = () => {
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState("");
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
  const [time, setTime] = useState('');
  const [chefLevel, setChefLevel] = useState('Novice');
  const [generatedRecipe, setGeneratedRecipe] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // state for controlling the popup visibility
  const { user, setUser } = useContext(UserContext); // use the context to get the user email
  const navigate = useNavigate(); // hook for navigation
  
  const handleToolChange = (tool) => {
    setTools((prevTools) => ({ ...prevTools, [tool]: !prevTools[tool] }));
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (ingredientInput) {
      setIngredients([...ingredients, ingredientInput]);
      setIngredientInput('');
    }
  };

  const handleGenerateRecipe = async (e) => {
    e.preventDefault();

    if (ingredients.length === 0 || !time) {
      console.error('Ingredients and time are required');
      return;
    }

    const selectedTools = Object.keys(tools).filter(tool => tools[tool]);

    const requestData = {
      tags: meal,
      ingredients: ingredients.join(", "),
      name: "Example",
      minutes: time,
      nutrition: "Example",
      
    };

    try {
      const response = await axios.post('http://40.88.8.211:4000/api/recipes/recommend', requestData);
      console.log(response.data);  // Debugging line
      if (response.data && response.data.length > 0) {
        setGeneratedRecipe(response.data[0]);
        setShowOutput(true);
      } else {
        console.error('No recipe data received');
      }
    } catch (error) {
      console.error('Error generating recipe:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return (
    <div className="chef-page">
      <Sidebar />
      <div className="chef-content">
        <div className="header">
          <div className="title">Pantry Chef</div>
          <div className="account">
            <button onClick={() => setShowPopup(true)}>A</button>
          </div>
        </div>

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
              <p>Email: {user.email}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        )}

        <form onSubmit={handleGenerateRecipe}>
          <div className="form-section">
            <div className="text">
              <div className="Step_no">1</div>
              <div className="text-description">What ingredients do you have?</div>
            </div>
            <div className="Inputs">
              <input
                className="detail-input"
                type="text"
                placeholder="Search or add ingredient"
                value={ingredientInput}
                onChange={(e) => setIngredientInput(e.target.value)}
              />
              <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="form-section">
            <div className="text">
              <div className="Step_no">2</div>
              <div className="text-description">What meal do you want to cook?</div>
            </div>
            <div className="Inputs">
              <select value={meal} onChange={(e) => setMeal(e.target.value)}>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <div className="text">
              <div className="Step_no">3</div>
              <div className="text-description">What kitchen tools do you have?</div>
            </div>
            <div className="Inputs">
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
          </div>

          <div className="form-section">
            <div className="text">
              <div className="Step_no">4</div>
              <div className="text-description">How much time do you have?</div>
            </div>
            <div className="Inputs">
              <input
                className="detail-input"
                type="number"
                placeholder="5 minutes"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          <div className="form-section">
            <div className="text">
              <div className="Step_no">5</div>
              <div className="text-description">Are you a good chef?</div>
            </div>
            <div className="Inputs">
              <select value={chefLevel} onChange={(e) => setChefLevel(e.target.value)}>
                <option value="Novice">Novice</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <div className="text">
              <div className="Step_no">6</div>
              <div className="text-description">Generate your Recipe.</div>
            </div>
            <div className="Outputs-button">
              <button type="submit">Generate Recipe</button>
            </div>
          </div>
        </form>

        {showOutput && generatedRecipe && (
          <div className="Output">
            <h3>{generatedRecipe.name}</h3>
            <h2>Ingredients</h2>
            <ol>
              {generatedRecipe.ingredients?.replace(/[\[\]']+/g, '').split(',').map((ingredient, index) => (
                <li key={index}>{ingredient.trim()}</li>
              ))}
            </ol>
            <h2>Instructions</h2>
            <ol>
              {generatedRecipe.steps?.replace(/[\[\]']+/g, '').split(',').map((step, index) => (
                <li key={index}>{step.trim()}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default PantryChef;
