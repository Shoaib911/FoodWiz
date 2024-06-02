import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import '../style/Chef.css';

const MasterChef = () => {
  const [showOutput, setShowOutput] = useState(false);

  const handleGenerateRecipe = (e) => {
    e.preventDefault(); // Prevent form submission
    setShowOutput(true);
  };

  return (
    <div className="chef-page">
      <Sidebar />

      <div className="chef-content">
        <div className="header">
          <div className="title">MasterChef</div>
          <div className="account">Sign in</div>
        </div>

        <form>
          <div className="form-section">
            <div className="text">
              <div className="step-no">1</div>
              <div className="text-description">
                Inspire MasterChef with your tastes or with a specific recipe.
              </div>
            </div>
            <div className="Inputs">
              <input className= "detail-input" type="text" placeholder="Recipe name"/>
            </div>
          </div>

          <div className="form-section">
            <div className="text">
              <div className="step-no">2</div>
              <div className="text-description">
                Select the amount of servings.
              </div>
            </div>
            <div className="Inputs">
              <input className= "detail-input" type="number" placeholder="Number of servings" />
            </div>
          </div>

          <div className="form-section">
            <div className="text">
              <div className="step-no">3</div>
              <div className="text-description">
                Select how much time you have.
              </div>
            </div>
            <div className="Inputs">
              <input className= "detail-input" type="text" placeholder="Time" />
            </div>
          </div>

          <div className="form-section">
            <div className="text">
              <div className="step-no">4</div>
              <div className="text-description">
                Select your skill level.
              </div>
            </div>
            <div className="Inputs">
              <select className= "detail-input">
                <option value="Novice">Novice</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <div className="text">
              <div className="step-no">5</div>
              <div className="text-description">
                Generate your Recipe.
              </div>
            </div>
            <div className="Outputs-button">
              
              <button type="button" >Add Details</button>
              <button onClick={handleGenerateRecipe}>Generate Recipe</button>
            </div>
          </div>
          
          {showOutput && (
            <div className="Output">
              <h3>Beef Wellington</h3>

              <h2>Ingredients</h2>
              <ol>
                <li>400 grams Beef tenderloin</li>
                <li>250 grams Puff pastry dough</li>
                <li>1 teaspoon Salt</li>
                <li>1 teaspoon Pepper</li>
                <li>1 piece Egg</li>
              </ol>

              <h2>Instructions</h2>
              <ol>
                <li>Preheat the oven to 200°C (400°F) degrees.</li>
                <li>Season the beef tenderloin with salt and pepper.</li>
                <li>Heat a pan over high heat and sear the beef on all sides until browned.</li>
                <li>Remove the beef from the pan and let it cool.</li>
                <li>Spread puff pastry dough on a flat surface and place the beef in the center.</li>
                <li>Wrap the beef with the dough, sealing the edges.</li>
                <li>Place the wrapped beef on a baking sheet and brush with egg wash.</li>
                <li>Bake in the preheated oven for 25-30 minutes or until the pastry is golden brown.</li>
                <li>Remove from the oven and let it rest for a few minutes before slicing.</li>
                <li>Serve and enjoy!</li>
              </ol>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default MasterChef;
