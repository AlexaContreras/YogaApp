import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { options } from '../../../helpers/options';
import { useSelector } from 'react-redux';
import { OwlCarouselInnerDiv } from './OwlCarouselInnerDiv';

export const OwlCarouselComponent = ({ type }) => {
  const entry = useSelector((state) => state.entry.entry[0]);

  const info = (name) => {
    const array = [];
    for (const key in entry) {
      if (entry[key].type === name) {
        array.push(entry[key]);
      }
    }
    return array;
  };

  const vinyasa = info('Vinyasa');
  const hatha = info('Hatha');
  /*  const yin = info('Yin') */

  return (
    <div>
      {type === 'Vinyasa' && (
        <OwlCarousel className='owl-theme' {...options}>
          {vinyasa.map((type) => (
            <OwlCarouselInnerDiv {...type} />
          ))}
        </OwlCarousel>
      )}
      {type === 'Hatha' && (
        <OwlCarousel className='owl-theme' {...options}>
          {hatha.map((type) => (
            <OwlCarouselInnerDiv {...type} />
          ))}
        </OwlCarousel>
      )}
      {type === 'Yin' && <h1>v</h1>}
    </div>
  );
};
