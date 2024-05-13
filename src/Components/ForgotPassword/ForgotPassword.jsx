import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './ForgotPassword.css';
import forgot_password_image from '../Assets/forgotx.png';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Use useNavigate hook

  const validateEmail = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      // Perform the next action
      console.log('Email is valid:', email);
      // Navigate to the NewPassword page
      navigate('/new-password');
    } else {
      console.log('Email is invalid');
    }
  };

  return (
    <div className='forgot-password'>
      <div className="forgot-password-container">
        <div className="forgot-password-left">
          <div className="image-container">
            <img src={forgot_password_image} alt="" />
          </div>
        </div>
        <div className="forgot-password-right">
          <h1>Forgot</h1>
          <h1>Password?</h1>
          <div className="forgot-password-fields">
            <label>Enter the email address associated with your account.</label>
            <input
              type="text"
              placeholder='Enter Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <p className="forgot-password-login">Try another way? <button onClick={handleSubmit}>Next</button></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
