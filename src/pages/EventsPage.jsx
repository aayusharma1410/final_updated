import React from 'react';
    import EventCard from '../components/EventCard';
    import './EventsPage.css';

    const EventsPage = () => {
      const events = [
        {
          id: 1,
          title: 'Tech Conference 2024',
          date: '2024-07-20',
          description: 'Join us for the largest tech conference of the year!',
          imageUrl: 'https://via.placeholder.com/400x200', // Placeholder image URL
        },
        {
          id: 2,
          title: 'AI Workshop',
          date: '2024-08-05',
          description: 'Learn the basics of AI and machine learning.',
          imageUrl: 'https://via.placeholder.com/400x200', // Placeholder image URL
        },
        {
          id: 3,
          title: 'Web Development Seminar',
          date: '2024-08-15',
          description: 'Enhance your web development skills with our expert seminar.',
          imageUrl: 'https://via.placeholder.com/400x200', // Placeholder image URL
        },
        {
          id: 4,
          title: 'Cybersecurity Bootcamp',
          date: '2024-09-01',
          description: 'Get hands-on training in cybersecurity.',
          imageUrl: 'https://via.placeholder.com/400x200', // Placeholder image URL
        },
        {
          id: 5,
          title: 'Data Science Workshop',
          date: '2024-09-10',
          description: 'Explore data analysis and visualization techniques.',
          imageUrl: 'https://via.placeholder.com/400x200', // Placeholder image URL
        },
        {
          id: 6,
          title: 'Mobile App Development Conference',
          date: '2024-09-25',
          description: 'Discover the latest trends in mobile app development.',
          imageUrl: 'https://via.placeholder.com/400x200', // Placeholder image URL
        },
        {
          id: 7,
          title: 'Cloud Computing Seminar',
          date: '2024-10-05',
          description: 'Learn about cloud computing and its applications.',
          imageUrl: 'https://via.placeholder.com/400x200', // Placeholder image URL
        },
        {
          id: 8,
          title: 'AR/VR Development Workshop',
          date: '2024-10-15',
          description: 'Create augmented and virtual reality experiences.',
          imageUrl: 'https://via.placeholder.com/400x200', // Placeholder image URL
        },
        {
          id: 9,
          title: 'Blockchain Technology Conference',
          date: '2024-10-25',
          description: 'Explore the world of blockchain and cryptocurrency.',
          imageUrl: 'https://via.placeholder.com/400x200', // Placeholder image URL
        },
        {
          id: 10,
          title: 'AI and Robotics Symposium',
          date: '2024-11-05',
          description: 'Discuss the integration of AI and robotics.',
          imageUrl: 'https://via.placeholder.com/400x200', // Placeholder image URL
        },
      ];

      return (
        <div className="events-page">
          <h1>Upcoming Events</h1>
          <div className="event-cards-container">
            {events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      );
    };

    export default EventsPage;
