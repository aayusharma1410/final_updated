import React from 'react';
    import TeacherCard from '../components/TeacherCard';
    import './TeacherQueryPage.css';

    const TeacherQueryPage = () => {
      const teachers = [
        {
          id: 1,
          name: 'Aayush Sharma',
          subject: 'Java',
          rating: 4.8,
          description: 'Expert in Java programming and Spring framework.',
        },
        {
          id: 2,
          name: 'Kanishk Verma',
          subject: 'C++',
          rating: 4.9,
          description: 'Specializes in C++ algorithms and data structures.',
        },
        {
          id: 3,
          name: 'Priya Sharma',
          subject: 'Machine Learning',
          rating: 4.5,
          description: 'Passionate about machine learning and deep learning.',
        },
        {
          id: 4,
          name: 'Anjali Kapoor',
          subject: 'DevOps',
          rating: 4.7,
          description: 'Experienced in DevOps practices and cloud technologies.',
        },
        {
          id: 5,
          name: 'Rahul Verma',
          subject: 'Python',
          rating: 4.6,
          description: 'Dedicated to Python programming and data analysis.',
        },
        {
          id: 6,
          name: 'Deepika Patel',
          subject: 'Data Science',
          rating: 4.4,
          description: 'Specialist in data science and big data technologies.',
        },
      ];

      return (
        <div className="teacher-query-page">
          <h1>Available Teachers</h1>
          <div className="teacher-cards-container">
            {teachers.map(teacher => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>
      );
    };

    export default TeacherQueryPage;
