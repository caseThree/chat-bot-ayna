import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css'; 

export function Signup() {
    const navigate = useNavigate();

    const handleToLogin = () => {
        navigate('/login');
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/user/sign-up', { username, password });
            toast.success('User created successfully!');
            setTimeout(() => handleToLogin(), 1500)
        } catch (error) {
            toast.error(`${error.response.data.message}`);
        }
    };

    return (
        <div className="signup-container">
            <p className='tag-line'>Signup for Nirvana</p>
            <form onSubmit={handleSubmit} className='form'>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="signup-input"  
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="signup-input" 
                />
                <button type="submit" className="signup-button-page">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
