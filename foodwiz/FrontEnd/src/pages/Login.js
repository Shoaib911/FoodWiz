import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Login.css'; // Ensure to create and style this CSS file

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication logic
    if (email === 'shoaibaltaf200@gmail.com' && password === '12345678') {
      setIsAuthenticated(true);
      navigate('/PantryChef');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={handleEmailChange} 
            required 
          />
        </div>
        <div className="form-group">
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
