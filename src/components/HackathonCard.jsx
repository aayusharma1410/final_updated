import React from 'react';
    import './HackathonCard.css';

    const HackathonCard = ({ hackathon }) => {
      return (
        <div className="hackathon-card">
          <h3>{hackathon.title}</h3>
          <p className="date">Date: {hackathon.date}</p>
          <p className="description">{hackathon.description}</p>
          <button>Register Now</button>
        </div>
      );
    };

    export default HackathonCard;
