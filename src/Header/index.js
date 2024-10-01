import './index.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Header({user, logout}) {
    const navigate = useNavigate();

    const handleHireMeClick = () => {
        navigate('/hire-me');
    };
    return (
        <header className="header">
            <div className="header-logo">Ayna</div>
            {user ? <button className='logout-button' onClick={logout}>Logout</button> : <div className="header-logout" onClick={handleHireMeClick}>Hire Me</div>}
        </header>
    );
}