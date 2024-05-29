import pantry from "../assets/images/pantry.png";
import '../style/Demo.css';
const PantryDemo = () => {
    return (
      
         <div>
        
        <div className="container">
          <div className="About">
            <p className="primary_text">PantryChef</p>
            <br></br>
            <h1>
                Where Ingredients Turn into
              <span className="primary_text">Masterpieces!</span>
            </h1>
            <p>
            Have a stocked pantry but no recipe inspiration? PantryChef is the kitchen genie that transforms your basic ingredients into gourmet delights. No more dinner dilemmas, just delectable dishes!
            </p>
          </div>
          <div className="about_image">
          <img src={pantry} alt="Pantrychef" />
          </div>
        </div>
        
        <div className="Steps">

          <div className="step-container">
            <div className="text_box">
              <div className="step-no">1</div>
                <p className="step-description">
                Add the ingredients you have at home.
                </p>
                <p>
                You can pick ingredients from the list or from your saved inventory.
                </p>
                <p>
                Remember: simply type ingredients  name in the search bar and add it.
                </p>
            </div>
            <div className="input-div">
              <input type="text" placeholder="Search ingredients"></input>
              
            </div>
          </div>

            <div className="step-container">
            <div className="text_box">
              <div className="step-no">2</div>
                <p className="step-description">
                Select what meal you want to cook.
                </p>
                <p>
                You can select Breakfast, Lunch, Snack or Dinner.
                </p>
                <p>
                PantryChef will then recommend you a suitable recipe for the meal you have selected.
                </p>
            </div>
            <div className="input-div">
              <input type="text" placeholder="2"></input>
            </div>
        </div>

        <div className="step-container">
            <div className="text_box">
              <div className="step-no">3</div>
                <p className="step-description">
                Select the kitchen utensils you have.
                </p>
                <p>
                Pick the kitchen utensils you have or you want to use.
                </p>
                <p>
                This will prevent PantryChef from recommending you recipes using utensils you don't have or don't want to use.
                </p>
            </div>
            <div className="input-div">
              <input type="text" placeholder="5"></input>
            </div>
        </div>

        <div className="step-container">
            <div className="text_box">
              <div className="step-no">4</div>
                <p className="step-description">
                Select how much time you have.
                </p>
                <p>
                Select 5 minutes if you are in a rush or longer if you have time.
                </p>
                <p>
                This will prevent PantryChef from recommending you recipes that take too long to prepare.
                </p>
            </div>
            <div className="input-div">
            <select>
                <option>Novice</option>
                <option>Intermediate</option>
                <option>Expert</option>
              </select>
            </div>
        </div>

        <div className="step-container">
            <div className="text_box">
              <div className="step-no">5</div>
                <p className="step-description">
                Select your skill level.
                </p>
                <p>
                It doesn't matter if you are a Novice or a Michelin Starred Chef.
                </p>
                <p>
                PantryChef will recommend you recipes that are suitable for your skill level.
                </p>
            </div>
            <div className="input-div">
              <button>Generate Recipe</button>
            </div>
        </div>
        
        <div className="step-container">
            <div className="text_box">
              <div className="step-no">6</div>
                <p className="step-description">
                Generate your Recipe.
                </p>
                <p>
                Press the Generate button and wait for the magic to happen.
                </p>
                <p>
                With one click you can save your Recipe in the Cookbook or add it to the Shopping List. And if you want to order the ingredients online, you can add all the ingredients to your AmazonFresh or InstaCart shopping cart too!
                </p>
            </div>
            <div className="input-div">
              <button>Generate Recipe</button>
            </div>
        </div>

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


        </div>
      </div>
    );
  };
  
  export default PantryDemo;