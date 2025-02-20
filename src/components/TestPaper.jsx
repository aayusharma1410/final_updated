import React, { useState, useEffect } from 'react';
import './TestPaper.css';

const TestPaper = () => {
  const [timer, setTimer] = useState(600); // 10 minutes in seconds
  const [questions, setQuestions] = useState([
    { id: 1, text: 'What is the time complexity of binary search?' },
    { id: 2, text: 'Explain the difference between a stack and a queue.' },
    { id: 3, text: 'What is a linked list?' },
    { id: 4, text: 'Describe the concept of recursion.' },
    { id: 5, text: 'What is a binary tree?' },
    { id: 6, text: 'Explain the concept of dynamic programming.' },
    { id: 7, text: 'What is a graph data structure?' },
    { id: 8, text: 'Describe the difference between BFS and DFS.' },
    { id: 9, text: 'What is a hash table?' },
    { id: 10, text: 'Explain the concept of sorting algorithms.' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="test-paper">
      <h2>DSA Test</h2>
      <div className="timer">Time Remaining: {formatTime(timer)}</div>
      <ol>
        {questions.map(question => (
          <li key={question.id} className="question">
            {question.text}
            <textarea rows="4" cols="50"></textarea>
          </li>
        ))}
      </ol>
      <button>Submit</button>
    </div>
  );
};

export default TestPaper;
