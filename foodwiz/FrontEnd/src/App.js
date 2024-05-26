import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import PantryChef from './pages/PantryChef';
import MasterChef from './pages/MasterChef';
import MacrosChef from './pages/MacrosChef';
import MacrosDemo from './Demos/MacrosChefDemo';
import MasterDemo from './Demos/MasterChefDemo';
import PantryDemo from './Demos/PantryDemo';
import Blog from './pages/Blog';
import About from './pages/AboutUs';
import Footer from './components/Footer';

const AppContent = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();
  const hideNavbarRoutes = ['/Login', '/Register','/PantryChef','/MasterChef','/MacrosChef'];

  const shouldHideNavbar = hideNavbarRoutes.some(route => location.pathname.startsWith(route));
  const hideFooterRoutes = ['/Login', '/Register','/PantryChef','/MasterChef','/MacrosChef'];

  const shouldHideFooter = hideFooterRoutes.some(route => location.pathname.startsWith(route));
  return (
    <div className="App">
      {!shouldHideNavbar && <Navbar />}
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PantryDemo" element={<PantryDemo />} />
          <Route path="/MasterDemo" element={<MasterDemo />} />
          <Route path="/MacrosDemo" element={<MacrosDemo />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/Register" element={<Register />} />
          <Route 
            path="/PantryChef" 
            element=/*{isAuthenticated ?*/ {<PantryChef />}/* : <Navigate to="/Login" *//>
          
          <Route path='/MasterChef' element={<MasterChef />}/>
          <Route path='/MacrosChef' element={<MacrosChef />}/>
        </Routes>
      </div>
      {!shouldHideFooter && <Footer />}
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
