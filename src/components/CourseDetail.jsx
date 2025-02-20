import React from 'react';
    import { useParams } from 'react-router-dom';
    import './CourseDetail.css';

    function CourseDetail({ courses }) {
      const { id } = useParams();
      const course = courses.find((c) => c.id === parseInt(id));

      if (!course) {
        return <div>Course not found</div>;
      }

      return (
        <div className="course-detail">
          <h2>{course.title}</h2>
          <img src={course.image} alt={course.title} />
          <p>{course.description}</p>
          <h3>Videos:</h3>
          <ul>
            {course.videos.map((video) => (
              <li key={video.id}>
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  {video.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default CourseDetail;
