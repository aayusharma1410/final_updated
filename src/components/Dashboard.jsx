import React from 'react';
    import CourseList from './CourseList';
    import LearningStatistics from './LearningStatistics';
    import './Dashboard.css';

    function Dashboard() {
      const courses = [
        {
          id: 1,
          title: 'Learn Figma',
          author: 'Christopher Morgan',
          duration: '6h 30min',
          rating: 4.9,
          image: 'https://via.placeholder.com/50x50',
        },
        {
          id: 2,
          title: 'Analog Photography',
          author: 'Gordon Norman',
          duration: '3h 15min',
          rating: 4.7,
          image: 'https://via.placeholder.com/50x50',
        },
        {
          id: 3,
          title: 'Master Instagram',
          author: 'Sophie Gill',
          duration: '7h 40min',
          rating: 4.6,
          image: 'https://via.placeholder.com/50x50',
        },
        {
          id: 4,
          title: 'Basics of Drawing',
          author: 'Jean Tate',
          duration: '11h 30min',
          rating: 4.8,
          image: 'https://via.placeholder.com/50x50',
        },
        {
          id: 5,
          title: 'Photoshop - Essence',
          author: 'David Green',
          duration: '5h 35min',
          rating: 4.7,
          image: 'https://via.placeholder.com/50x50',
        },
        {
          id: 6,
          title: 'Web Development Bootcamp',
          author: 'Angela Yu',
          duration: '45h',
          rating: 4.9,
          image: 'https://via.placeholder.com/50x50',
        },
        {
          id: 7,
          title: 'Data Science and Machine Learning',
          author: 'Andrew Ng',
          duration: '60h',
          rating: 4.8,
          image: 'https://via.placeholder.com/50x50',
        },
        {
          id: 8,
          title: 'Mobile App Development with React Native',
          author: 'Maximilian Schwarzmüller',
          duration: '30h',
          rating: 4.7,
          image: 'https://via.placeholder.com/50x50',
        },
        {
          id: 9,
          title: 'Complete Python Developer Course',
          author: 'Jose Portilla',
          duration: '50h',
          rating: 4.6,
          image: 'https://via.placeholder.com/50x50',
        },
        {
          id: 10,
          title: 'Cyber Security Course',
          author: 'Nathan House',
          duration: '40h',
          rating: 4.5,
          image: 'https://via.placeholder.com/50x50',
        },
      ];

      const learningData = [
        { day: 'Mon', hours: 1.5 },
        { day: 'Tue', hours: 2.5 },
        { day: 'Wed', hours: 1 },
        { day: 'Thu', hours: 4 },
        { day: 'Fri', hours: 3 },
        { day: 'Sat', hours: 2 },
        { day: 'Sun', hours: 1 },
      ];

      return (
        <div className="dashboard">
          <div className="header-section">
            <div className="greeting">
              <h1>Welcome!</h1>
              <p>It's good to see you again.</p>
            </div>
            <div className="stats">
              <div className="stat-box">
                <h2>11</h2>
                <p>Courses completed</p>
              </div>
              <div className="stat-box">
                <h2>4</h2>
                <p>Courses in progress</p>
              </div>
            </div>
          </div>
          <LearningStatistics data={learningData} />
          <CourseList courses={courses} />
        </div>
      );
    }

    export default Dashboard;
