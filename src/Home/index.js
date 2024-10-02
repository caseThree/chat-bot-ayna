import React, { useState, useEffect, useContext } from 'react';
import './index.css'; 
import { SocketProvider, SocketContext } from './socket-context';

export function Home({user, setIsOpen}) {
    const [messages, setMessages] = useState(user?.sessionMessages?.[user?.currentSession?.name] ?? []);
    const [input, setInput] = useState('');

    console.log(messages)

    const socket = useContext(SocketContext);

    useEffect(() => {
        if (!socket) {
            console.error('Socket is not defined');
            return;
        }

        console.log(socket)

        console.log('Socket connected:', socket.id);

        const handleMessage = (message) => {
            console.log('Message received:', message);
            setMessages((prevMessages) => [
                ...prevMessages,
                { id: `message_${message.message}_${Date.now()}`, text: message.message, name: 'Bot' },
            ]);
        };

        socket.listenForMessages(handleMessage);

    }, [messages.length==0]);

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { id: messages.length, text: input, name: user.username }]);
            socket.sendMessage(input, user?.currentSession?.name || 'default');
            setInput('');
        }
    };

    const handleSessions = () => {
        setIsOpen(true)
    }

    return (
            <div className="messenger-container">
                <div className="messages-list">
                    {messages?.map((msg) => (
                        <div key={msg.id} className="message">
                            <div className="message-header">
                                <span className="message-name">{msg.name}</span>
                                <span className="message-icon">
                                    {msg.name === 'Bot' ? '🤖' : '👤'}
                                </span>
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
                    <button onClick={handleSessions} className="session-button">📚</button>
                </div>
            </div>
    );
}

export default Home;