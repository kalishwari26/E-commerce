import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import signup_image from '../Components/Assets/login.jpg';
import { Link } from 'react-router-dom';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); 

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    }
    if (!confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      
      setSubmitted(true); 
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
      {!submitted && <div className="loginsignup-left">
          <img src={signup_image} alt="" />
        </div>}
        <div className="loginsignup-right">
        {!submitted && <h1>Sign Up</h1>}
          {!submitted && ( 
            <div className="loginsignup-fields">
              <label>Name</label>
              <input
                type="text"
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}

              <label>Email</label>
              <input
                type="email"
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}

              <label>Password</label>
              <input
                type="password"
                placeholder='Create Password'
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
          )}
          {submitted && ( 
            <div className={`success-message ${submitted ? 'popup-animation' : ''}`}>
              <p style={{fontSize:'20px'}}><i class="fa-solid fa-circle-check animated-checkmark"></i> Sign Up Successful!</p>
              <Link to="/login" style={{textDecoration:'none'}}><button style={{width:'150px',height:'40px',marginTop:'20px'}}>Login Here</button></Link>
            </div>
          )}
          {!submitted && ( 
            <button onClick={handleSubmit}>Continue</button>
          )}
         {!submitted &&  <p className="loginsignup-login">Already have an account? <Link style={{ textDecoration: 'none' }} to='/login'><span> Login here</span></Link> </p>}
         {!submitted && <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' /><p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
