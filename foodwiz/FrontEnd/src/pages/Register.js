import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Register.css'; // Ensure to create and style this CSS file

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="register-container">
      <h2>Create an account</h2>
      <button className="google-signin">Sign in with Google</button>
      <p>or continue with email</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={handleEmailChange} 
            placeholder="your@email.com"
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={handlePasswordChange} 
            placeholder="Please ensure to enter at least 6 characters"
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Repeat password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={handleConfirmPasswordChange} 
            placeholder="Type your password again. Please ensure the passwords match"
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
