import React from 'react';
import { HeaderDivs } from './HeaderDivs';

export const HeaderComponent = () => {
  return (
    <div className='header animate__animated animate__fadeIn'>
      <img className='header-img' src='../../img/yoga.jpg' alt='yoga' />

      <div className='header-div'>
        <a href='#divs'>Contact us</a>
      </div>
      <div className='header-divs' id='divs'>
        <HeaderDivs title='Spirit' />
        <HeaderDivs title='Mind' />
        <HeaderDivs title='Body' />
      </div>
    </div>
  );
};
