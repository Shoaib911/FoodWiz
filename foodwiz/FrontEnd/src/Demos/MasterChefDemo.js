import React, { useState } from "react";
import masterimg from "../assets/images/Master.png";
import '../style/Demo.css';
const MasterDemo = () => {
  const [showOutput, setShowOutput] = useState(false)
  const handleGenerateRecipe = () => {
    setShowOutput(true);
  };
    return (
      <div>
        
        <div className="container">
          <div className="About">
            <span className="Primary_text">MasterChef</span>
            <br></br>
            <br></br>
            <h1>
              Unleash Culinary Creativity
              <span className="Primary_text">Beyond Imagination!</span>
            </h1>
            <p>
              MasterChef is a cooking companion like no other. No more scrolling
              and googling to find the perfect recipe. Uncover endless recipe
             possibilities and personalized dishes with a touch of AI magic!
            </p>
          </div>
          <div className="about_image">
          <img src={masterimg} alt="MasterChef" />
          </div>
        </div>
        
        <div className="Steps">

          <div className="step-container">
            <div className="text_box">
              <div className="step-no">1</div>
                <span className="step-description">
                Inspire MasterChef with your tastes or with a specific recipe.
                </span>
                <p>
                Tell MasterChef what you feel like eating and see the magic happens. Are you feeling like a Lasagna made with lamb ragù? or a Kimchi Stew?
                </p>
                <p>
                MasterChef will craft the prefect recipe that most suits your description.
                </p>
            </div>
            <div className="input-demo-div">
              <input type="text" placeholder="Beef Welling"></input>
            </div>
          </div>

            <div className="step-container">
            <div className="text_box">
              <div className="step-no">2</div>
                <span className="step-description">
                Select the amount of servings.
                </span>
                <p>
                Are you cooking for yourself or for many guests?
                </p>
                <p>
                MasterChef will generate a recipe with the right amount of ingredients to yield the desired amount of servings.
                </p>
            </div>
            <div className="input-demo-div">
              <input type="text" placeholder="2 Persons"></input>
            </div>
        </div>

        <div className="step-container">
            <div className="text_box">
              <div className="step-no">3</div>
                <span className="step-description">
                Select how much time you have.
                </span>
                <p>
                Select 5 minutes if you are in a rush or longer if you have time.
                </p>
                <p>
                This will prevent MasterChef from recommending you recipes that take too long to prepare.
                </p>
            </div>
            <div className="input-demo-div">
              <input type="text" placeholder="5 minutes"></input>
            </div>
        </div>

        <div className="step-container">
            <div className="text_box">
              <div className="step-no">4</div>
                <span className="step-description">
                Select your skill level.
                </span>
                <p>
                It doesn't matter if you are a Novice or a Michelin Starred Chef.
                </p>
                <p>
                MasterChef will recommend you recipes that are suitable for your skill level.
                </p>
            </div>
            <div className="input-demo-div">
            <select className="select-demo">
                <option>Novice</option>
                <option>Intermediate</option>
                <option>Expert</option>
              </select>
            </div>
        </div>

        
        <div className="step-container">
            <div className="text_box">
              <div className="step-no">5</div>
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

        </div>
      </div>
    );
  };
  
  export default MasterDemo;