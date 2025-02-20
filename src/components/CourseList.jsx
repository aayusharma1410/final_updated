import React from 'react';
import './CourseList.css';

function CourseList({ courses }) {
  return (
    <div className="course-list">
      <h2>Courses</h2>
      <ul className="courses">
        {courses.map((course) => (
          <li key={course.id} className="course-item">
            <div className="course-details">
              <h3>{course.title}</h3>
              <p>{course.author}</p>
            </div>
            <div className="course-info">
              <span className="duration">{course.duration}</span>
              <span className="rating">{course.rating}</span>
            </div>
            <button className="view-course-button">View course</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
