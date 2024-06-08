import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../style/Chef.css';
import Sidebar from '../components/Sidebar';
import { UserContext } from '../components/UserContext'; // import the context
import { useNavigate } from 'react-router-dom';
import Loader from '../components/loader'; // Import the Loader component

const MacrosChef = () => {
  const [showOutput, setShowOutput] = useState(false);
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [meal, setMeal] = useState('');
  const [generatedRecipe, setGeneratedRecipe] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // state for controlling the popup visibility
  const [loading, setLoading] = useState(false); // state for loader
  const { user, setUser } = useContext(UserContext); // use the context to get the user email
  const navigate = useNavigate(); // hook for navigation

  const handleGenerateRecipe = async (e) => {
    e.preventDefault(); // Prevent form submission

    // Validate required fields
    if (!calories || !protein || !fat || !meal) {
      console.error('All fields are required');
      return;
    }

    setLoading(true); // show loader

    // Prepare data to be sent to the backend
    const requestData = {
      tags: meal,
      ingredients: "Example", // You can customize this as needed
      minutes: "30", // You can customize this as needed
      name: "Recipe Name", // You can customize this as needed
      nutrition: `[${calories},${fat},0,0,${protein},0]`
    };

    try {
      const response = await axios.post('http://localhost:4000/api/recipes/recommend', requestData);
      console.log(response.data);  // Debugging line
      if (response.data && response.data.length > 0) {
        setGeneratedRecipe(response.data[0]);
        setShowOutput(true);
      } else {
        console.error('No recipe data received');
      }
    } catch (error) {
      console.error('Error generating recipe:', error);
    } finally {
      setLoading(false); // hide loader
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
          <div className="title">MacrosChef</div>
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
              <div className="text-description">
                Select your target macronutrient you want to achieve.
              </div>
            </div>
            <div className="Inputs">
              <div className="input-container">
                <label>Calories:</label>
                <div className="input-group">
                  <input type="text" placeholder="20" value={calories} onChange={(e) => setCalories(e.target.value)} />
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
              <div className="Step_no">2</div>
              <div className="text-description">
                Select what meal you want to cook.
              </div>
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
              <div className="text-description">
                Generate your Recipe.
              </div>
            </div>
            <div className="Outputs-button">
              <button type="submit" disabled={loading}>Generate Recipe</button>
            </div>
          </div>
        </form>

        {loading && (
          <div className="loader-container">
            <Loader/>
          </div>
        )}

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

export default MacrosChef;
