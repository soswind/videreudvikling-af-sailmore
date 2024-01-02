import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import './App.css';

const ChatComponent = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'User', message: 'Hej med dig, det er længe siden sidst.', timestamp: '12:00' },
        { id: 2, sender: 'Bot', message: 'Hvordan går det?', timestamp: '12:01' },
        { id: 3, sender: 'User', message: 'Det går godt! Hvordan har du det?', timestamp: '12:02' },
    ]);

    const [currentMessage, setCurrentMessage] = useState('');
    const [currentSender, setCurrentSender] = useState('User');

    const handleSendMessage = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timestamp = `${hours}:${minutes}`;

        const newMessage = { id: messages.length + 1, sender: currentSender, message: currentMessage, timestamp };
        setMessages([...messages, newMessage]);
        setCurrentMessage('');
    };

    return (
        
        <div className="chat">
            <div className="message-input">
                {messages.map((message) => (
                    <ChatMessage key={message.id} sender={message.sender} message={message.message} timestamp={message.timestamp} />
                ))}
        </div>
        <div className="input-container">
        <input 
        className="message-input" 
        type="text" 
        value={currentMessage} 
        onChange={(e) => setCurrentMessage(e.target.value)} 
        placeholder='Write your message'
        />
        <button className="send-button" onClick={handleSendMessage}>SEND</button>
        </div>
        </div>
    );
};

export default ChatComponent;