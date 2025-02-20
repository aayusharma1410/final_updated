import React, { useState } from 'react';
    import './Chatbox.css';

    const Chatbox = () => {
      const [messages, setMessages] = useState([]);
      const [input, setInput] = useState('');

      const handleInputChange = (event) => {
        setInput(event.target.value);
      };

      const handleSendMessage = () => {
        if (input.trim() !== '') {
          const newMessage = { text: input, sender: 'user' };
          setMessages([...messages, newMessage]);
          setInput('');

          // Simulate chatbot response
          setTimeout(() => {
            const chatbotResponse = { text: `Echo: ${input}`, sender: 'chatbot' };
            setMessages([...messages, newMessage, chatbotResponse]);
          }, 500);
        }
      };

      return (
        <div className="chatbox">
          <div className="chatbox-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbox-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={handleInputChange}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      );
    };

    export default Chatbox;
