import React from 'react';
import './TestCard.css';

const TestCard = ({ test, type }) => {
  return (
    <div className={`test-card ${type}`}>
      <h3>{test.title}</h3>
      {type === 'upcoming' && <p>Date: {test.date}</p>}
      {type === 'previous' && <p>Score: {test.score}</p>}
    </div>
  );
};

export default TestCard;
