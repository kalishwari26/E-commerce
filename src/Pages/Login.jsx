import React, { useState } from 'react';
import './CSS/Login.css';
import loginsignup_image from '../Components/Assets/loginsignup.jpeg';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};

    if (!email.trim()) {
      errors.email = 'Email is required';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      setSubmitted(true); 
    }
  };

  return (
    <div className='login'>
      <div className="login-container">
        <div className="login-left">
      {!submitted && (
<div>
          <h1>Login</h1>
          <p className='login-quotes'>Welcome! Login to get amazing discounts and offers only for you.</p>
          </div>)}
          {!submitted && (
            <div>
              <div className="login-fields">
                <label>User Name</label>
                <input
                  type="email"
                  placeholder='Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="error-message">{errors.email} X</p>}

                <label>Password</label>
                <input
                  type="password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="error-message">{errors.password} X</p>}
              </div>
              <p className="login-login">
                <input type="checkbox" name='' id='' />Remember me
                <Link style={{ textDecoration: 'none' }} to='/forgot-password'><span> Forgot Password? </span></Link>
              </p>
              <button onClick={handleSubmit}>Login</button>
            </div>
          )}
          {submitted && (
                       <div className={`success-message ${submitted ? 'popup-animation' : ''}`}>
              <p style={{fontSize:'20px'}}><i class="fa-solid fa-circle-check"></i> Login successful!</p>
              <Link to="/"style={{textDecoration:'none'}}><button style={{width:'150px',height:'40px',marginTop:'20px'}}>Go to Home</button></Link>
            </div>
          )}
        </div>
        {!submitted && (
        <div className="login-right">
          <img src={loginsignup_image} alt="" />
        </div>
)}
      </div>
    </div>
  );
};

export default Login;
