import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/Account.css';
import logo from '../assets/images/logo.png';
import { UserContext } from '../components/UserContext';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); 

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://40.88.8.211:4000/api/users/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
      setUser({ email });
      navigate('/PantryChef');
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="account-container">
      <div className="loogo">
            <img src={logo} alt="Logo" className="loogo-image" />
            <h1>Food<span className="Primary-text">Wiz</span></h1>
          </div>
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={handleEmailChange} 
            required 
          />
        </div>
        <div className="form_group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={handlePasswordChange} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/Register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
