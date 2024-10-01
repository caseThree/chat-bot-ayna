import React, { useState } from 'react';
import './index.css';

export function PrevHome() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [sessions, setSessions] = useState([]); // Array to hold session data
    const [newSessionName, setNewSessionName] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { id: messages.length, text: input, name: 'User' }]);
            setInput(''); // Clear the input after sending
        }
    };

    return (
        <div className="messenger-container">
            <div className="messages-list">
                {messages.map((msg) => (
                    <div key={msg.id} className="message">
                        <div className="message-header">
                            <span className="message-name">{msg.name}</span>
                            <span className="message-icon">👤</span>
                        </div>
                        <div className="message-text">{msg.text}</div>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="message-input"
                />
                <button onClick={handleSend} className="send-button">Send</button>
            </div>
        </div>
    );
}