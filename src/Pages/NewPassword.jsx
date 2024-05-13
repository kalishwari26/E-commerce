import React, { useState } from 'react';
import './CSS/NewPassword.css';
import new_password from '../Components/Assets/newpassword.png';
import { Link } from 'react-router-dom';

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validatePassword = () => {
    const errors = {};
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      // Perform the next action (e.g., submit form data)
      // For demonstration purposes, just set submitted to true
      setSubmitted(true);
    }
  };

  return (
    <div className='new-password'>
      <div className="new-password-container">
        <div className="new-password-left">
          {!submitted &&<h1>New Password</h1>}
          {!submitted ? (
            <div className="new-password-fields">
              <label>New Password</label>
              <input
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="error-message">{errors.password}</p>}

              <label>Confirm Password</label>
              <input
                type="password"
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </div>
          ) : (
            <div className="new-password-success-message">
            <p style={{color:'green',textAlign:'center',justifyContent:'center'}}><i class="fa-solid fa-circle-check" style={{color:'green',justifyContent:'center'}}></i> New password created successfully!</p>
            <Link to="/"style={{textDecoration:'none'}}><button style={{width:'150px',height:'40px',marginTop:'20px'}}>Go to Home</button></Link>
            </div>
          )}
          {!submitted && <button onClick={handleSubmit}>Submit</button>}
        </div>
        <div className="new-password-right">
        {!submitted && <img src={new_password} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
