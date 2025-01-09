/* eslint-disable react/prop-types */

import './Achievement.css';

export const Achievement = ({ achievements }) => {
  return (
    <div className='Main'>
    <div className="achievement-list">
      {achievements.map((achievement, index) => (
        <div key={index} className='achievement-item'>
          <div className='achievement-description'>
            <h3>{achievement.description}</h3>
          </div>
          <div className='achievement-year'>
            <h3>{achievement.year}</h3>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
