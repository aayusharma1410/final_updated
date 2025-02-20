import React from 'react';
    import './EventCard.css';

    const EventCard = ({ event }) => {
      return (
        <div className="event-card">
          <img src={event.imageUrl} alt={event.title} />
          <h3>{event.title}</h3>
          <p className="date">Date: {event.date}</p>
          <p className="description">{event.description}</p>
          <button>Learn More</button>
        </div>
      );
    };

    export default EventCard;
