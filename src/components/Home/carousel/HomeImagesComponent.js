import React, { useState, useEffect } from 'react';
import { OwlCarouselComponent } from './OwlCarouselComponent';

export const HomeImagesComponent = () => {
  const [div, setDiv] = useState('Vinyasa');

  useEffect(() => {}, []);

  const handleClickVinyasa = () => {
    setDiv('Vinyasa');
  };

  const handleClickHatha = () => {
    setDiv('Hatha');
  };

  const handleClickYin = () => {
    setDiv('Yin');
  };

  return (
    <div className='home-images-component'>
      <div className='home-images-div'>
        <button
          onClick={handleClickVinyasa}
          id='Vinyasa'
          className='btn-home-images-div'
        >
          Vinyasa
        </button>
        <button
          onClick={handleClickHatha}
          id='Hatha'
          className='btn-home-images-div'
        >
          Hatha
        </button>
        <button
          onClick={handleClickYin}
          id='Yin'
          className='btn-home-images-div'
        >
          Yin
        </button>
      </div>

      <OwlCarouselComponent type={div} />
    </div>
  );
};
