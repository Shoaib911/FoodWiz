import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import PantryChef from './pages/PantryChef';
import MacrosDemo from './pages/Demo/MacrosChefDemo';
import MealPlanDemo from './pages/Demo/MealPlanChefDemo';
import PantryDemo from './pages/Demo/PantryChefDemo';
import Blog from './pages/Blog';
import About from './pages/AboutUs';

const AppContent = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();
  const hideNavbarRoutes = ['/Login', '/Register','/PantryChef'];

  const shouldHideNavbar = hideNavbarRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div className="App">
      {!shouldHideNavbar && <Navbar />}
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PantryChefDemo" element={<PantryDemo />} />
          <Route path="/MealPlanDemo" element={<MealPlanDemo />} />
          <Route path="/MacrosDemo" element={<MacrosDemo />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/Register" element={<Register />} />
          <Route 
            path="/PantryChef" 
            element={isAuthenticated ? <PantryChef /> : <Navigate to="/Login" />} 
          />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <AppContent isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </Router>
  );
};

export default App;
