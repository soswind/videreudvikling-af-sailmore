import React, { useState } from 'react';


{/* Chat message component */}

const Chat = () => {
    const [messages, setMessages] = useState([]);

    const sendMessage = (text) => {
        setMessages([...messages, { text, sender: 'user' }]);
    };

    return (
        <div className="chat-container">
            <MessageList messages={messages} />
            <ChatInput sendMessage={sendMessage} />
        </div>
    );
};

export default Chat;



