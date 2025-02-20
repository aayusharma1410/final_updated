import React from 'react';
import TestPaper from '../components/TestPaper';
import TestCard from '../components/TestCard';
import './TestsPage.css';

const TestsPage = () => {
  const upcomingTests = [
    { id: 1, title: 'DSA Test 1', date: '2024-08-15' },
    { id: 2, title: 'Algorithms Test', date: '2024-08-22' },
  ];

  const previousTests = [
    { id: 3, title: 'DSA Test - July', score: 85 },
    { id: 4, title: 'Algorithms Test - July', score: 92 },
  ];

  return (
    <div className="tests-page">
      <h1>Tests</h1>
      <TestPaper />

      <h2>Upcoming Tests</h2>
      <div className="tests-grid">
        {upcomingTests.map(test => (
          <TestCard key={test.id} test={test} type="upcoming" />
        ))}
      </div>

      <h2>Previous Tests</h2>
      <div className="tests-grid">
        {previousTests.map(test => (
          <TestCard key={test.id} test={test} type="previous" />
        ))}
      </div>
    </div>
  );
};

export default TestsPage;
