import React from 'react';
import { NavBar } from './NavBar';
import { YogaMeditationHeader } from './yoga-meditation/YogaMeditationHeader';

export const MeditationScreen = () => {
  return (
    <div>
      <NavBar />
      <YogaMeditationHeader
        name='MEDI-'
        name2='TATION'
        p={
          <p className='yoga-screen-p'>
            Meditation means to think, contemplate or reflect.
            <br /> All over the world it has different names, but the idea is
            the same: reach a state of mind that allows you to focus on one
            thing.
          </p>
        }
        svg='meditation'
      />
      <h1>jssjsj</h1>
    </div>
  );
};
