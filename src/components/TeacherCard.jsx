import React from 'react';
    import './TeacherCard.css';

    const TeacherCard = ({ teacher }) => {
      return (
        <div className="teacher-card">
          <h3>{teacher.name}</h3>
          <p className="subject">Subject: {teacher.subject}</p>
          <p className="rating">Rating: {teacher.rating}</p>
          <p className="description">{teacher.description}</p>
          <button>Contact Teacher</button>
        </div>
      );
    };

    export default TeacherCard;
