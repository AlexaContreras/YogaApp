import React, { useRef, useLayoutEffect, useState } from 'react';
import { Svg } from './Svg';

export const YogaMeditationHeader = ({ name, name2, p, svg }) => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {}, []);

  const onMouseMove = () => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
    const width = dimensions.width;
    const height = dimensions.height;
    console.log(width, height);
  };
  return (
    <>
      <div className='yoga-screen-header'>
        <div
          onMouseMove={onMouseMove}
          className={
            name === 'YOGA' ? 'yoga-screen-title' : 'meditation-screen-title '
          }
        >
          <div ref={targetRef}>
            <h1 className='yoga-screen-title-yoga animate__animated animate__slideInLeft'>
              {name}
            </h1>
            <h1 className='yoga-screen-title-portal animate__animated animate__slideInLeft'>
              {name2}
            </h1>
          </div>

          {p}
        </div>
        <div className='yoga-screen-box'>
          <Svg name={svg} />
        </div>
      </div>
    </>
  );
};
