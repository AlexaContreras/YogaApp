import React from 'react';

export const OurTutors = () => {
  return (
    <div className='home-tutors'>
      <div className='container home-tutors-div'>
        <div className='home-tutors-info-div'>
          <h1>Our Instructors</h1>
          <p>
            Meditation means to think, contemplate or reflect. All over the
            world it has different names, but the idea is the same: reach a
            state of mind that allows you to focus on one thing. With this
            collection of meditation you can explore ancient techniques and
            follow our experts, who will teach you both relaxing and moving
            meditations.
          </p>
        </div>

        <div className='home-tutors-imgs'>
          <img className='home-tutor-img' src={`img/tutor-1.jpg`} alt='' />
          <img className='home-tutor-img' src={`img/tutor-2.jpg`} alt='' />
          <img className='home-tutor-img' src={`img/tutor-4.jpg`} alt='' />
          <img className='home-tutor-img' src={`img/tutor-6.jpg`} alt='' />
        </div>
      </div>
    </div>
  );
};
