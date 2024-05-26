import Sidebar from '../components/Sidebar';

const MasterChef = () => {
    return (
      <div>
        <Sidebar />

        <div className="header">
          <div className="title">MasterChef</div>
          <div className="account">
             Sign in
          </div>
        </div>

        <div className="form-section">
          <div className="text">
            <div className="step-no">1</div>
              <div className="text-description">
                Inspire MasterChef with your tastes or with a specific recipe.
            </div>
          </div>
          <div className="inputs">
            <input type="text" placeholder="Recipe name"/>
          </div>

        </div>

        <div className="form-section">
          <div className="text">
            <div className="step-no">2</div>
              <div className="text-description">
              Select the amount of servings.
            </div>
          </div>
          <div className="inputs">
            <input type="text" placeholder="2"/>
          </div>

        </div>

        <div className="form-section">
          <div className="text">
            <div className="step-no">3</div>
              <div className="text-description">
              Select how much time you have.
            </div>
          </div>
          <div className="inputs">
            <input type="text" placeholder="Recipe name"/>
          </div>

        </div>

        <div className="form-section">
          <div className="text">
            <div className="step-no">4</div>
              <div className="text-description">
              Select your skill level.
            </div>
          </div>
          <div className="inputs">
            <input type="text" placeholder="Skill levels"/>
          </div>

        </div>
        

        <div className="form-section">
          <div className="text">
            <div className="step-no">5</div>
              <div className="text-description">
              Generate your Recipe.
            </div>
          </div>
          <div className="inputs">
            <button>Generate Recipe</button>
          </div>

        </div>
      </div>
    );
  };
  
  export default MasterChef;