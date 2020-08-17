import React from 'react';

export const OwlCarouselInnerDiv = ({ id, url, title, info }) => {
  return (
    <div className='home-carousel' key={id}>
      <img className='home-img-carousel' src={url} alt={title} />
      <h1 className='home-h1-carousel'>{title}</h1>
      <div className='home-div-p-carousel'>
        <p className='home-p-carousel'>{info}</p>
      </div>
    </div>
  );
};
