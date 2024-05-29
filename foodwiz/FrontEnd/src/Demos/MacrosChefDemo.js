import '../style/Demo.css';
import macro from "../assets/images/macros.png";
const MacrosDemo = () => {
    return (
         <div>
        
        <div className="container">
          <div className="About">
            <p className="primary_text">MacrosChef</p>
            <br></br>
            <h1>
               Hit Your Macros
              <span className="primary_text">The Simple Way!</span>
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
                <p className="step-description">
                Select your target macronutrient you want to achieve.
                </p>
                <p>
                Tell MacrosChef the amount in grams of Carbohydrates, Proteins and Fats that your meal should have.

                </p>
                <p>
                MacrosChef will craft the prefect recipe that achieve your macronutrients goal!
                </p>
            </div>
            <div className="input-div">
              <input type="text" placeholder="Beef Welling"></input>
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
                MasterChef will generate a recipe with the right amount of ingredients to yield the desired amount of servings.
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
  
  export default MacrosDemo;