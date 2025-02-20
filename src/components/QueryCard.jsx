import React from 'react';
    import './QueryCard.css';

    const QueryCard = ({ title, description, children }) => {
      return (
        <div className="query-card">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="button-container">{children}</div>
        </div>
      );
    };

    export default QueryCard;
