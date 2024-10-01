import './index.css';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow, FaHackerrank, FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiMedium } from 'react-icons/si';

export function HireMe() {
    const [showCredentials, setShowCredentials] = useState(false);

    const toggleCredentials = () => {
        setShowCredentials(!showCredentials);
    };

    return (
        <div className="hire-me">
            <h1 class="hire-me-text">Hire Me</h1>
            <img src="/superman.jpeg" alt="Your Name" className="profile-image" />
            <p>
                Hi, I'm <span className="highlight-name">Shobhit Tewari</span>
                <span className="highlight-handle">case3</span>. Please feel free to visit my work and links below.
            </p>
            <p>Feel free to contact me.</p>
            
            <div className="links">
                <a href="https://github.com/caseThree" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/casethree/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://stackoverflow.com/users/10417435/shobhit-tewari" target="_blank" rel="noopener noreferrer">
                    <FaStackOverflow /> Stack Overflow
                </a>
                <a href="https://app.hackthebox.com/users/372146" target="_blank" rel="noopener noreferrer">
                    <FaHackerrank /> Hack The Box
                </a>
                <a href="https://leetcode.com/u/sansshobhit/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode  /> LeetCode
                </a>
                <a href="https://www.codechef.com/users/shobhit01" target="_blank" rel="noopener noreferrer">
                    <SiCodechef /> CodeChef
                </a>
            </div>

            <div className="contact">
                <h3>Contact Me:</h3>
                <a href="https://wa.me/+916394233643" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp /> WhatsApp
                </a>
                <a href="tel:+916394233643">
                    <FaPhoneAlt /> Call
                </a>
                <a href="mailto:sansshobhit@gmail.com">
                    <FaEnvelope /> Mail
                </a>
            </div>

            <div className="admin-link">
                <button onClick={toggleCredentials} className="toggle-button">
                    Resume
                </button>
            </div>
        </div>
    );
}