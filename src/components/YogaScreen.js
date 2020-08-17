import React from 'react';
import { NavBar } from './NavBar';
import { YogaMeditationHeader } from './yoga-meditation/YogaMeditationHeader';

export const YogaScreen = () => {
  return (
    <div>
      <NavBar />
      <YogaMeditationHeader
        name='YOGA'
        name2='PORTAL'
        p={
          <p className='yoga-screen-p'>
            Make yourself at home at Yogia's yoga portal <br /> designed to
            expand your mind, nourish your body, and uplift your soul.
          </p>
        }
        svg='lotus'
      />
      <h1>jssjsj</h1>
    </div>
  );
};
