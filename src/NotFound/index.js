import React from 'react';
import './index.css'; // Ensure to include your CSS file

export function NotFound() {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Oops! The page you're looking for does not exist.</p>
            <a href="/" className="not-found-link">Go back to Home</a>
        </div>
    );
}

export default NotFound;
