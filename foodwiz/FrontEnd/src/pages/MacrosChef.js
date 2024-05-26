import '../style/Chef.css';
import Sidebar from '../components/Sidebar';
const MacrosChef = () => {
    return (
      <div className='chef-page'>
      <Sidebar />
      <div className="chef-content">
      <div className="header">
        <div className="title">MacrosChef</div>
        <div className="account">
           Sign in
        </div>
      </div>
<form>
      <div className="form-section">
        <div className="text">
          <div className="step-no">1</div>
            <div className="text-description">
            Select your target macronutrient you want to achieve.
          </div>
        </div>
        <div className="inputs">
          <div className="input-container">
            <label>Carbs:</label>
            <div className="input-group">
              <input type="text" placeholder="20" />
              <span>grams</span>
            </div>
          </div>
          <label>Protien:</label>
            <div className="input-group">
              <input type="text" placeholder="20" />
              <span>grams</span>
            </div>
            <label>Fat:</label>
            <div className="input-group">
              <input type="text" placeholder="20" />
              <span>grams</span>
            </div>
        </div>

      </div>

      <div className="form-section">
        <div className="text">
          <div className="step-no">2</div>
            <div className="text-description">
            Select what meal you want to cook.
          </div>
        </div>
        <div className="inputs">
          <input type="text" placeholder="Lunch"/>
        </div>

      </div> 

      <div className="form-section">
        <div className="text">
          <div className="step-no">3</div>
            <div className="text-description">
            Generate your Recipe.
          </div>
        </div>
        <div className="inputs">
          <button>Generate Recipe</button>
        </div>

      </div>
      </form>
    </div>
    </div>
    );
  };
  
  export default MacrosChef;