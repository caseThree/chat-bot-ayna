import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

export function LandingPage() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    return (
        <div className="landing-container">
            <button className="landing-button" onClick={handleLogin}>Login</button>
            <button className="landing-button sign-up-button" onClick={handleSignup}>Signup</button>
        </div>
    );
}