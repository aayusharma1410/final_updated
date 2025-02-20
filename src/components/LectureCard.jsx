import React from 'react';
import './LectureCard.css';

const LectureCard = ({ lecture }) => {
  return (
    <div className="lecture-card">
      <h3>{lecture.title}</h3>
      <button>View Lecture</button>
    </div>
  );
};

export default LectureCard;
