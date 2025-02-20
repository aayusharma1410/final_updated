import React from 'react';
    import './AssignmentCard.css';

    const AssignmentCard = ({ assignment, type }) => {
      return (
        <div className={`assignment-card ${type === 'completed' ? 'completed' : ''}`}>
          <h3>{assignment.title}</h3>
          <p>{assignment.description}</p>
          {type === 'upcoming' && <p>Due Date: {assignment.dueDate}</p>}
          {type === 'completed' && <p>Completion Date: {assignment.completionDate}</p>}
          <button>{type === 'completed' ? 'View Details' : 'Start Assignment'}</button>
        </div>
      );
    };

    export default AssignmentCard;
