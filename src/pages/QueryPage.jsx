import React from 'react';
    import QueryCard from '../components/QueryCard';
    import './QueryPage.css';
    import { Link } from 'react-router-dom'; // Import Link

    const QueryPage = () => {
      return (
        <div className="query-page">
          <h1>Ask Your Query</h1>
          <div className="query-cards-container">
            <QueryCard
              title="Ask Teacher"
              description="Get personalized help from experienced teachers."
              buttonText="Ask Now"
              onClick={() => {}}
            >
              <Link to="/teacher-query">Ask Now</Link>
            </QueryCard>
            <QueryCard
              title="Ask Chatbot"
              description="Get instant answers from our AI-powered chatbot."
              buttonText="Ask Now"
              onClick={() => {}}
            >
              <Link to="/chatbot-query">Ask Now</Link>
            </QueryCard>
          </div>
        </div>
      );
    };

    export default QueryPage;
