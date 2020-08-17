import React from 'react';
import { NavBar } from './NavBar';
import { HeaderComponent } from './Home/header/HeaderComponent';
import { HomeImagesComponent } from './Home/carousel/HomeImagesComponent';
import { OurTutors } from './Home/tutors/OurTutors';
import { useDispatch } from 'react-redux';
import { getEntryDb } from '../actions/entries';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  dispatch(getEntryDb());
  return (
    <div>
      <NavBar />
      <HeaderComponent />

      <div className='container animate__animated animate__fadeIn'>
        <HomeImagesComponent />
      </div>
      <OurTutors />
    </div>
  );
};
