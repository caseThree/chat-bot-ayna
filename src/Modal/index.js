import { RiCloseLine } from 'react-icons/ri';
import ReactDOM from 'react-dom';
import './index.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

export function Modal({ isOpen, setIsOpen, user }) {
    const [currentSession, setCurrentSession] = useState(user?.currentSession ?? "default")
    const [sessions, setSessions] = useState(user?.sessions.map(sess => sess.name) ?? []);

    console.log(`session: ${currentSession}`)

    useEffect(() => {
        if (user?.sessions) {
            setSessions(user.sessions.map(sess => sess.name));
        } else {
            setSessions([]);
        }
    }, [user]); 


    const [newSession, setNewSession] = useState('');

    const handleCreateSession = async () => {
        if (newSession.trim()) {
            const response = await axios.post(
                `${process.env.REACT_APP_API_BASE_URL}/user/session`,
                {
                    session: newSession.trim(),
                },
                {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                    },
                }
            );
            setSessions([...sessions, newSession]);
            setNewSession('');
        }
    };

    if (!isOpen || !user) return null;

    return ReactDOM.createPortal(
        <>
        <div className='overlay' />
        <div className='modal'>
        <button onClick={() => setIsOpen(false)} className="closeBtn">
                    <RiCloseLine />
                </button>
                
                <h3>Current session: {currentSession ?? "default"}</h3>
                
                <div className='sessionList'>
                    {sessions.map((session, index) => (
                        <div
                            key={index}
                            className='sessionItem'
                            onClick={() => setCurrentSession(session)} 
                        >
                            {session}
                        </div>
                    ))}
                </div>

                <div className='newSessionContainer'>
                    <input
                        type='text'
                        value={newSession}
                        onChange={(e) => setNewSession(e.target.value)}
                        placeholder='Create new session...'
                    />
                    <button className='button-create' onClick={handleCreateSession}>Create</button>
                </div>
        </div>
        </>,
        document.getElementById('portal')
    );
}