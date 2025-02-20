import React from 'react';
    import Chatbox from '../components/Chatbox';
    import './ChatbotQueryPage.css';

    const ChatbotQueryPage = () => {
      return (
        <div className="chatbot-query-page">
          <h1>Ask Our Chatbot</h1>
          <Chatbox />
        </div>
      );
    };

    export default ChatbotQueryPage;
