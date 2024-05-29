import masterimg from "../assets/images/Master.png";
import '../style/Demo.css';
const MasterDemo = () => {
    return (
      <div>
        
        <div className="container">
          <div className="About">
            <p className="primary_text">MasterChef</p>
            <br></br>
            <h1>
              Unleash Culinary Creativity
              <span className="primary_text">Beyond Imagination!</span>
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
                <p className="step-description">
                Inspire MasterChef with your tastes or with a specific recipe.
                </p>
                <p>
                Tell MasterChef what you feel like eating and see the magic happens. Are you feeling like a Lasagna made with lamb ragù? or a Kimchi Stew?
                </p>
                <p>
                MasterChef will craft the prefect recipe that most suits your description.
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
                Select the amount of servings.
                </p>
                <p>
                Are you cooking for yourself or for many guests?
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
                Select how much time you have.
                </p>
                <p>
                Select 5 minutes if you are in a rush or longer if you have time.
                </p>
                <p>
                This will prevent MasterChef from recommending you recipes that take too long to prepare.
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
                Select your skill level.
                </p>
                <p>
                It doesn't matter if you are a Novice or a Michelin Starred Chef.
                </p>
                <p>
                MasterChef will recommend you recipes that are suitable for your skill level.
                </p>
            </div>
            <div className="input-div">
            <select cla>
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
  
  export default MasterDemo;