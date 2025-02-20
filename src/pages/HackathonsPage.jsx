import React from 'react';
    import HackathonCard from '../components/HackathonCard';
    import './HackathonsPage.css';

    const HackathonsPage = () => {
      const hackathons = [
        {
          id: 1,
          title: 'AI Innovation Challenge',
          date: '2024-07-15',
          description: 'Develop AI solutions for real-world problems.',
        },
        {
          id: 2,
          title: 'Web3 Hackathon',
          date: '2024-07-22',
          description: 'Build decentralized applications on blockchain.',
        },
        {
          id: 3,
          title: 'Mobile App Development Contest',
          date: '2024-07-29',
          description: 'Create innovative mobile apps for iOS and Android.',
        },
        {
          id: 4,
          title: 'Data Science Hackfest',
          date: '2024-08-05',
          description: 'Analyze and visualize large datasets to gain insights.',
        },
        {
          id: 5,
          title: 'Cybersecurity Challenge',
          date: '2024-08-12',
          description: 'Solve cybersecurity challenges and protect digital assets.',
        },
        {
          id: 6,
          title: 'IoT Innovation Hackathon',
          date: '2024-08-19',
          description: 'Build IoT solutions for smart homes and cities.',
        },
        {
          id: 7,
          title: 'Game Development Jam',
          date: '2024-08-26',
          description: 'Create engaging games with innovative mechanics.',
        },
        {
          id: 8,
          title: 'AR/VR Hackathon',
          date: '2024-09-02',
          description: 'Develop augmented and virtual reality experiences.',
        },
        {
          id: 9,
          title: 'Blockchain Innovation Challenge',
          date: '2024-09-09',
          description: 'Build blockchain solutions for various industries.',
        },
        {
          id: 10,
          title: 'AI and Robotics Hackathon',
          date: '2024-09-16',
          description: 'Integrate AI and robotics to create intelligent systems.',
        },
      ];

      return (
        <div className="hackathons-page">
          <h1>Upcoming Hackathons</h1>
          <div className="hackathon-cards-container">
            {hackathons.map(hackathon => (
              <HackathonCard key={hackathon.id} hackathon={hackathon} />
            ))}
          </div>
        </div>
      );
    };

    export default HackathonsPage;
