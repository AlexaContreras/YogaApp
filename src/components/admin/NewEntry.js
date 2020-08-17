import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startNewEntry } from '../../actions/entries';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui';

export const NewEntry = () => {
  const { msgError } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const [formValues, handleInputChange, handleFileChange, reset] = useForm({
    type: '',
    title: '',
    info: '',
    file: '',
  });

  const { type, title, info, file } = formValues;

  const handlePicture = () => {
    document.querySelector('#fileSelector').click();
  };

  const isFormValid = () => {
    if (type.length < 2) {
      dispatch(setError('Type should be at least 2 characters'));
      return false;
    } else if (title.length < 2) {
      dispatch(setError('Title should be at least 2 characters'));
      return false;
    } else if (info.length < 2) {
      dispatch(setError('Info should be at least 2 characters'));
      return false;
    } else if (file.length <= 0) {
      dispatch(setError('File is required to continue'));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startNewEntry(type, title, info, file));
      reset();
    }
  };
  return (
    <div className='auth-login'>
      <div className='auth-login-div'>
        <h1 className='auth-container_title '>
          <span> Create new entry</span>
        </h1>
        <form className='' onSubmit={handleSubmit}>
          <input
            className='auth-container_input'
            type='text'
            placeholder='Type'
            autoFocus
            autoComplete='off'
            name='type'
            value={type}
            onChange={handleInputChange}
          />
          {msgError === 'Type should be at least 2 characters' && (
            <p className='auth-alert-error'>{msgError}</p>
          )}

          <input
            className='auth-container_input'
            type='text'
            placeholder='Title'
            autoFocus
            autoComplete='off'
            name='title'
            value={title}
            onChange={handleInputChange}
          />
          {msgError === 'Title should be at least 2 characters' && (
            <p className='auth-alert-error'>{msgError}</p>
          )}

          <textarea
            className='auth-container_input'
            type='text'
            placeholder='Info'
            autoFocus
            autoComplete='off'
            name='info'
            value={info}
            onChange={handleInputChange}
          />
          {msgError === 'Info should be at least 2 characters' && (
            <p className='auth-alert-error'>{msgError}</p>
          )}

          <input
            id='fileSelector'
            type='file'
            name='file'
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <div className='auht-new-entry-image-button'>
            <button className='btn-center-purple' onClick={handlePicture}>
              Picture
            </button>
          </div>
          {msgError === 'File is required to continue' && (
            <p className='auth-alert-error'>{msgError}</p>
          )}

          <button className='btn-auth pointer ' type='submit'>
            Sign up
          </button>
        </form>
      </div>
      <div className='auth-container_div-redirect '>
        <p>Home page</p>
        <Link className='links-auth pointer' to='/'>
          Home
        </Link>
      </div>
    </div>
  );
};
