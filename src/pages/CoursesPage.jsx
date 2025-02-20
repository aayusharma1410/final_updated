import React from 'react';
import CourseCard from '../components/CourseCard';
import './CoursesPage.css';

const CoursesPage = () => {
  const courses = [
    { id: 1, title: 'Advanced JavaScript', description: 'Master JavaScript concepts.', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'React Development', description: 'Build interactive UIs with React.', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Node.js Mastery', description: 'Learn server-side development with Node.js.', image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Python for Data Science', description: 'Analyze data with Python.', image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Java Programming', description: 'Fundamentals of Java programming.', image: 'https://via.placeholder.com/150' },
    { id: 6, title: 'C++ Essentials', description: 'Learn C++ programming.', image: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Data Structures and Algorithms', description: 'Master data structures.', image: 'https://via.placeholder.com/150' },
    { id: 8, title: 'Database Management', description: 'Manage databases effectively.', image: 'https://via.placeholder.com/150' },
    { id: 9, title: 'Cloud Computing', description: 'Introduction to cloud computing.', image: 'https://via.placeholder.com/150' },
    { id: 10, title: 'Cybersecurity Fundamentals', description: 'Learn cybersecurity basics.', image: 'https://via.placeholder.com/150' },
    { id: 11, title: 'Mobile App Development', description: 'Build mobile apps.', image: 'https://via.placeholder.com/150' },
    { id: 12, title: 'Game Development', description: 'Create video games.', image: 'https://via.placeholder.com/150' },
    { id: 13, title: 'Artificial Intelligence', description: 'Introduction to AI.', image: 'https://via.placeholder.com/150' },
    { id: 14, title: 'Machine Learning', description: 'Learn machine learning.', image: 'https://via.placeholder.com/150' },
    { id: 15, title: 'Deep Learning', description: 'Explore deep learning.', image: 'https://via.placeholder.com/150' }
  ];

  return (
    <div className="courses-page">
      <h1>Technical Courses</h1>
      <div className="courses-grid">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
