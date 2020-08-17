import React from 'react';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='auth-login'>
      <div className='auth-login-div'>
        <h1 className='auth-container_title '>
          <span> Yogia</span>
        </h1>
        <form className='' onSubmit={handleSubmit}>
          <input
            className='auth-container_input'
            type='text'
            placeholder='Email'
            autoFocus
            autoComplete='off'
            name='email'
          />

          <input
            className='auth-container_input'
            type='password'
            placeholder='Password'
            autoComplete='off'
            name='password'
          />

          <button className='btn-auth pointer ' type='submit'>
            Sign in
          </button>
        </form>
      </div>
      <div className='auth-container_div-redirect '>
        <p>You do not have an account?</p>
        <Link className='links-auth pointer' to='/auth/register'>
          Sign up
        </Link>
      </div>
    </div>
  );
};
