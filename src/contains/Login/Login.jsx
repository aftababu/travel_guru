import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='loginContainer' style={{ marginTop: '10vh' }}>
      <h1>Login Form</h1>
      <form>
        <div className='form-group'>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='Enter your username'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Enter your password'
          />
        </div>
        <div className='form-group'>
          <input type='checkbox' id='remember' name='remember' />
          <label htmlFor='remember'>Remember me</label>
        </div>
        <div className='form-group'>
          <button type='submit'>Login</button>
        </div>
        <div className='form-group form-footer'>
          <p>
            Don't have an account? <Link to={'/signup'}>Create one</Link>
          </p>
        </div>
      </form>
      <div className='oauth-buttons'>
        <button className='google'>Login with Google</button>
        <button className='facebook'>Login with Facebook</button>
      </div>
    </div>
  );
};

export default Login;
