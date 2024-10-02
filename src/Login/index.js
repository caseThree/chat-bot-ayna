import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './index.css'; 
import axios from 'axios';

export function Login({setUser}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, { username, password });
            console.log(response)
            const { access_token } = response.data;

            const sessions = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/session`, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            });

            console.log(sessions)

            setUser({ username, access_token, sessions: sessions?.data, selectedSession: sessions?.data?.[0] ?? {id: "default", name: "default"} });

            toast.success('Login successful!');
        } catch (error) {
            console.log(error)
            toast.error(`${error.response.data.message}`);
        }
    };

    return (
        <div className="login-container">
            <p className='tag-line'>Ayna to Nirvana</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                />
                <button type="submit" className="login-button" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    );
}

export default Login;