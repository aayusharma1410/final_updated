import React from 'react';
import './DiscussionGroupCard.css';

const DiscussionGroupCard = ({ group }) => {
  return (
    <div className="discussion-group-card">
      <h3>{group.title}</h3>
      <p>{group.description}</p>
      <button>Join Group</button>
    </div>
  );
};

export default DiscussionGroupCard;
