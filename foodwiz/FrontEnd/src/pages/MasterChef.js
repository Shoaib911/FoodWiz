import React, { useState, useContext } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import { UserContext } from '../components/UserContext'; // import the context
import { useNavigate } from 'react-router-dom';
import '../style/Chef.css';
import Loader from '../components/loader'; // Import the Loader component

const MasterChef = () => {
  const [showOutput, setShowOutput] = useState(false);
  const [recipeName, setRecipeName] = useState('');
  const [servings, setServings] = useState('');
  const [time, setTime] = useState('');
  const [skillLevel, setSkillLevel] = useState('Novice');
  const [generatedRecipe, setGeneratedRecipe] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // state for controlling the popup visibility
  const [loading, setLoading] = useState(false); // state for loader
  const { user, setUser } = useContext(UserContext); // use the context to get the user email
  const navigate = useNavigate(); // hook for navigation

  const handleGenerateRecipe = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!recipeName || !time) {
      console.error('Recipe name and time are required');
      return;
    }

    setLoading(true); // show loader

    // Prepare data to be sent to the backend
    const requestData = {
      tags: 'Example',
      ingredients: 'Example',
      minutes: time,
      name: recipeName,
      nutrition: 'Example',
      
    };

    try {
      const response = await axios.post('http://localhost:4000/api/recipes/recommend', requestData);
      console.log(response.data); // Debugging line
      // Assuming response.data is an array, take the first element
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
          <div className="title">MasterChef</div>
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
                Inspire MasterChef with your tastes or with a specific recipe.
              </div>
            </div>
            <div className="Inputs">
              <input
                className="detail-input"
                type="text"
                placeholder="Recipe name"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-section">
            <div className="text">
              <div className="Step_no">2</div>
              <div className="text-description">
                Select the amount of servings.
              </div>
            </div>
            <div className="Inputs">
              <input
                className="detail-input"
                type="number"
                placeholder="Number of servings"
                value={servings}
                onChange={(e) => {
                  const inputValue = parseInt(e.target.value);
                  if (!isNaN(inputValue) && inputValue > 0) {
                    setServings(inputValue);
                  } else if (e.target.value === '') {
                    // Allow clearing the input
                    setServings('');
                  }
                }}
              />
            </div>
          </div>

          <div className="form-section">
            <div className="text">
              <div className="Step_no">3</div>
              <div className="text-description">
                Select how much time you have.
              </div>
            </div>
            <div className="Inputs">
              <input
                className="detail-input"
                type="number"
                placeholder="Time"
                value={time}
                onChange={(e) => {
                  const inputValue = parseInt(e.target.value);
                  if (!isNaN(inputValue) && inputValue > 0) {
                    setTime(inputValue);
                  } else if (e.target.value === '') {
                    // Allow clearing the input
                    setTime('');
                  }
                }}
              />
            </div>
          </div>

          <div className="form-section">
            <div className="text">
              <div className="Step_no">4</div>
              <div className="text-description">
                Select your skill level.
              </div>
            </div>
            <div className="Inputs">
              <select
                className="detail-input"
                value={skillLevel}
                onChange={(e) => setSkillLevel(e.target.value)}
              >
                <option value="Novice">Novice</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <div className="text">
              <div className="Step_no">5</div>
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

export default MasterChef;
