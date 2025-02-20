import React from 'react';
import { useParams, Link } from 'react-router-dom';
import LectureCard from '../components/LectureCard';
import './CourseDetailsPage.css';

const CourseDetailsPage = () => {
  const { courseId } = useParams();

  // Dummy course data (replace with actual data fetching)
  const courses = [
    {
      id: '1',
      title: 'Advanced JavaScript',
      description: 'Master JavaScript concepts.',
      lectures: [
        { id: 1, title: 'Introduction to ES6' },
        { id: 2, title: 'Asynchronous JavaScript' },
        { id: 3, title: 'Working with APIs' },
        { id: 4, title: 'Modern JavaScript Frameworks' },
        { id: 5, title: 'JavaScript Design Patterns' },
        { id: 6, title: 'Advanced DOM Manipulation' },
        { id: 7, title: 'JavaScript Testing' },
        { id: 8, title: 'Performance Optimization' },
        { id: 9, title: 'Security Best Practices' },
        { id: 10, title: 'JavaScript Tooling' },
      ],
    },
    {
      id: '2',
      title: 'React Development',
      description: 'Build interactive UIs with React.',
      lectures: [
        { id: 11, title: 'React Components' },
        { id: 12, title: 'React Hooks' },
        { id: 13, title: 'State Management' },
        { id: 14, title: 'React Router' },
        { id: 15, title: 'React Forms' },
        { id: 16, title: 'React Testing' },
        { id: 17, title: 'React Performance' },
        { id: 18, title: 'Redux Fundamentals' },
        { id: 19, title: 'Context API' },
        { id: 20, title: 'Custom Hooks' },
      ],
    },
    {
      id: '3',
      title: 'Node.js Mastery',
      description: 'Learn server-side development with Node.js.',
      lectures: [
        { id: 21, title: 'Introduction to Node.js' },
        { id: 22, title: 'Node.js Modules' },
        { id: 23, title: 'Express.js Framework' },
        { id: 24, title: 'RESTful APIs with Node.js' },
        { id: 25, title: 'Middleware in Node.js' },
        { id: 26, title: 'Database Integration' },
        { id: 27, title: 'Authentication and Authorization' },
        { id: 28, title: 'Testing Node.js Applications' },
        { id: 29, title: 'Deployment Strategies' },
        { id: 30, title: 'Performance Monitoring' },
      ],
    },
    {
      id: '4',
      title: 'Python for Data Science',
      description: 'Analyze data with Python.',
      lectures: [
        { id: 31, title: 'Introduction to Python' },
        { id: 32, title: 'Data Structures in Python' },
        { id: 33, title: 'NumPy Library' },
        { id: 34, title: 'Pandas Library' },
        { id: 35, title: 'Data Visualization with Matplotlib' },
        { id: 36, title: 'Data Cleaning and Preprocessing' },
        { id: 37, title: 'Statistical Analysis' },
        { id: 38, title: 'Machine Learning with Scikit-learn' },
        { id: 39, title: 'Data Analysis Projects' },
        { id: 40, title: 'Advanced Data Science Techniques' },
      ],
    },
    {
      id: '5',
      title: 'Java Programming',
      description: 'Fundamentals of Java programming.',
      lectures: [
        { id: 41, title: 'Introduction to Java' },
        { id: 42, title: 'Object-Oriented Programming' },
        { id: 43, title: 'Data Structures in Java' },
        { id: 44, title: 'Java Collections Framework' },
        { id: 45, title: 'Exception Handling' },
        { id: 46, title: 'Multithreading in Java' },
        { id: 47, title: 'Java I/O' },
        { id: 48, title: 'Networking in Java' },
        { id: 49, title: 'Java Swing' },
        { id: 50, title: 'JavaFX' },
      ],
    },
    {
      id: '6',
      title: 'C++ Essentials',
      description: 'Learn C++ programming.',
      lectures: [
        { id: 51, title: 'Introduction to C++' },
        { id: 52, title: 'Object-Oriented Programming in C++' },
        { id: 53, title: 'Pointers and Memory Management' },
        { id: 54, title: 'Data Structures in C++' },
        { id: 55, title: 'Templates in C++' },
        { id: 56, title: 'Standard Template Library (STL)' },
        { id: 57, title: 'Exception Handling in C++' },
        { id: 58, title: 'File I/O in C++' },
        { id: 59, title: 'Multithreading in C++' },
        { id: 60, title: 'Advanced C++ Concepts' },
      ],
    },
    {
      id: '7',
      title: 'Data Structures and Algorithms',
      description: 'Master data structures.',
      lectures: [
        { id: 61, title: 'Introduction to Data Structures' },
        { id: 62, title: 'Arrays and Linked Lists' },
        { id: 63, title: 'Stacks and Queues' },
        { id: 64, title: 'Trees and Binary Trees' },
        { id: 65, title: 'Graphs' },
        { id: 66, title: 'Sorting Algorithms' },
        { id: 67, title: 'Searching Algorithms' },
        { id: 68, title: 'Hashing' },
        { id: 69, title: 'Dynamic Programming' },
        { id: 70, title: 'Greedy Algorithms' },
      ],
    },
    {
      id: '8',
      title: 'Database Management',
      description: 'Manage databases effectively.',
      lectures: [
        { id: 71, title: 'Introduction to Databases' },
        { id: 72, title: 'Relational Database Model' },
        { id: 73, title: 'SQL Basics' },
        { id: 74, title: 'Database Design' },
        { id: 75, title: 'Normalization' },
        { id: 76, title: 'Transactions' },
        { id: 77, title: 'Indexing' },
        { id: 78, title: 'Stored Procedures' },
        { id: 79, title: 'Database Security' },
        { id: 80, title: 'Database Administration' },
      ],
    },
    {
      id: '9',
      title: 'Cloud Computing',
      description: 'Introduction to cloud computing.',
      lectures: [
        { id: 81, title: 'Introduction to Cloud Computing' },
        { id: 82, title: 'Cloud Service Models (IaaS, PaaS, SaaS)' },
        { id: 83, title: 'Virtualization' },
        { id: 84, title: 'Cloud Storage' },
        { id: 85, title: 'Cloud Networking' },
        { id: 86, title: 'Cloud Security' },
        { id: 87, title: 'Cloud Deployment Models' },
        { id: 88, title: 'Cloud Management' },
        { id: 89, title: 'Cloud Automation' },
        { id: 90, title: 'Cloud Cost Optimization' },
      ],
    },
    {
      id: '10',
      title: 'Cybersecurity Fundamentals',
      description: 'Learn cybersecurity basics.',
      lectures: [
        { id: 91, title: 'Introduction to Cybersecurity' },
        { id: 92, title: 'Threats and Vulnerabilities' },
        { id: 93, title: 'Cryptography' },
        { id: 94, title: 'Network Security' },
        { id: 95, title: 'Endpoint Security' },
        { id: 96, title: 'Application Security' },
        { id: 97, title: 'Data Security' },
        { id: 98, title: 'Incident Response' },
        { id: 99, title: 'Security Auditing' },
        { id: 100, title: 'Security Compliance' },
      ],
    },
    {
      id: '11',
      title: 'Mobile App Development',
      description: 'Build mobile apps.',
      lectures: [
        { id: 101, title: 'Introduction to Mobile App Development' },
        { id: 102, title: 'Mobile UI/UX Design' },
        { id: 103, title: 'Native vs. Cross-Platform Development' },
        { id: 104, title: 'Android Development' },
        { id: 105, title: 'iOS Development' },
        { id: 106, title: 'React Native' },
        { id: 107, title: 'Flutter' },
        { id: 108, title: 'Mobile App Testing' },
        { id: 109, title: 'Mobile App Deployment' },
        { id: 110, title: 'Mobile App Monetization' },
      ],
    },
    {
      id: '12',
      title: 'Game Development',
      description: 'Create video games.',
      lectures: [
        { id: 111, title: 'Introduction to Game Development' },
        { id: 112, title: 'Game Design Principles' },
        { id: 113, title: 'Game Engines (Unity, Unreal Engine)' },
        { id: 114, title: 'Game Programming' },
        { id: 115, title: 'Game Art and Animation' },
        { id: 116, title: 'Game Audio' },
        { id: 117, title: 'Game Testing' },
        { id: 118, title: 'Game Publishing' },
        { id: 119, title: 'Game Monetization' },
        { id: 120, title: 'Advanced Game Development Techniques' },
      ],
    },
    {
      id: '13',
      title: 'Artificial Intelligence',
      description: 'Introduction to AI.',
      lectures: [
        { id: 121, title: 'Introduction to Artificial Intelligence' },
        { id: 122, title: 'Machine Learning Basics' },
        { id: 123, title: 'Deep Learning Fundamentals' },
        { id: 124, title: 'Natural Language Processing (NLP)' },
        { id: 125, title: 'Computer Vision' },
        { id: 126, title: 'Robotics' },
        { id: 127, title: 'AI Ethics' },
        { id: 128, title: 'AI Applications' },
        { id: 129, title: 'AI Future Trends' },
        { id: 130, title: 'AI Project Development' },
      ],
    },
    {
      id: '14',
      title: 'Machine Learning',
      description: 'Learn machine learning.',
      lectures: [
        { id: 131, title: 'Introduction to Machine Learning' },
        { id: 132, title: 'Supervised Learning' },
        { id: 133, title: 'Unsupervised Learning' },
        { id: 134, title: 'Reinforcement Learning' },
        { id: 135, title: 'Model Evaluation' },
        { id: 136, title: 'Feature Engineering' },
        { id: 137, title: 'Model Selection' },
        { id: 138, title: 'Machine Learning Tools' },
        { id: 139, title: 'Machine Learning Projects' },
        { id: 140, title: 'Advanced Machine Learning Techniques' },
      ],
    },
    {
      id: '15',
      title: 'Deep Learning',
      description: 'Explore deep learning.',
      lectures: [
        { id: 141, title: 'Introduction to Deep Learning' },
        { id: 142, title: 'Neural Networks' },
        { id: 143, title: 'Convolutional Neural Networks (CNNs)' },
        { id: 144, title: 'Recurrent Neural Networks (RNNs)' },
        { id: 145, title: 'Autoencoders' },
        { id: 146, title: 'Generative Adversarial Networks (GANs)' },
        { id: 147, title: 'Deep Learning Frameworks (TensorFlow, PyTorch)' },
        { id: 148, title: 'Deep Learning Applications' },
        { id: 149, title: 'Deep Learning Projects' },
        { id: 150, title: 'Advanced Deep Learning Techniques' },
      ],
    },
  ];

  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-details-page">
      <Link to="/courses" className="back-arrow">
        &larr; Back to Courses
      </Link>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <h2>Lectures</h2>
      <div className="lectures-grid">
        {course.lectures.map(lecture => (
          <LectureCard key={lecture.id} lecture={lecture} />
        ))}
      </div>
    </div>
  );
};

export default CourseDetailsPage;
