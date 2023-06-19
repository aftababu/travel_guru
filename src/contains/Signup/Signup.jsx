import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <div className='signup-container'>
        <h2>Create an Account</h2>
        <form>
          <div className='form-group'>
            <input type='text' placeholder='First Name' />
          </div>
          <div className='form-group'>
            <input type='text' placeholder='Last Name' />
          </div>
          <div className='form-group'>
            <input type='text' placeholder='Username' />
          </div>
          <div className='form-group'>
            <input type='password' placeholder='Password' />
          </div>
          <div className='form-group'>
            <input type='password' placeholder='Confirm Password' />
          </div>
          <div className='form-group'>
            <a href='#' className='account-link'>
              Already have an account?
            </a>
          </div>
          <div className='form-group'>
            <button className='btn btn-primary'>Sign Up</button>
          </div>
        </form>
      </div>
      <div className='social-login'>
        <p>Or sign up with:</p>
        <div className='social-buttons'>
          <button className='btn facebook'>
            <FaFacebook />
            <Link> Continue with Facebook</Link>
          </button>
          <button className='btn google'>
            <FaGoogle />
            <Link> Continue with Google</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
