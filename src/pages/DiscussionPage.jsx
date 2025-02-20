import React from 'react';
import DiscussionGroupCard from '../components/DiscussionGroupCard';
import './DiscussionPage.css';

const DiscussionPage = () => {
  const discussionGroups = [
    { id: 1, title: 'DSA Challengers', description: 'Discuss and solve DSA problems together.' },
    { id: 2, title: 'Java Ke Chaava', description: 'All about Java programming.' },
    { id: 3, title: 'Python Ka Saap', description: 'Python enthusiasts unite!' },
    { id: 4, title: 'C Ke Solvers', description: 'Solving problems in C.' },
  ];

  return (
    <div className="discussion-page">
      <h1>Discussion Groups</h1>
      <button className="create-group-button">Create a Group</button>
      <div className="discussion-groups-grid">
        {discussionGroups.map(group => (
          <DiscussionGroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default DiscussionPage;
