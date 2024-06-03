import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style/Account.css';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://40.88.8.211:4000/api/users/register', { username, email, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (

    <div className="account-container">
      <h2>Create an account</h2>

      {message && <p>{message}</p>}
      <button className="google-signin">Sign in with Google</button>

      <p>or continue with email</p>

      <form onSubmit={handleSubmit}>

        <div className="form_group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={handleUsernameChange} 
            required 
          />
        </div>


        <div className="form_group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={handleEmailChange} 
            required 
          />
        </div>


        <div className="form_group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={handlePasswordChange} 
            required 
          />
        </div>


        <div className="form_group">
          <label htmlFor="confirmPassword">Repeat password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={handleConfirmPasswordChange} 
            required 
          />
        </div>


        <button type="submit" className="get-started">Get started</button>
      </form>

      <p>
        Already have an account? <Link to="/Login">Sign In</Link>
      </p>
    </div>
  );
};

export default Register;
