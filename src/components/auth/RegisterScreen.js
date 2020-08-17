import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='auth-login'>
      <div className='auth-login-div'>
        <h1 className='auth-container_title '>
          <span> Yogia register</span>
        </h1>
        <form className='' onSubmit={handleSubmit}>
          <input
            className='auth-container_input'
            type='text'
            placeholder='Name'
            autoFocus
            autoComplete='off'
            name='name'
          />

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
          <input
            className='auth-container_input'
            type='password'
            placeholder='Repeat password'
            autoComplete='off'
            name='password2'
          />

          <button className='btn-auth pointer ' type='submit'>
            Sign up
          </button>
        </form>
      </div>
      <div className='auth-container_div-redirect '>
        <p>You have an account?</p>
        <Link className='links-auth pointer' to='/auth/login'>
          Sign in
        </Link>
      </div>
    </div>
  );
};
