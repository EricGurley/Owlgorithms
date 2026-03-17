import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className = "navbar-container">
            <Link to="/" className = "neon-button"> Practice </Link>
            <Link to="/read" className = "neon-button"> Read </Link>
            <Link to="/login" className = "neon-button"> Login </Link>
            <Link to="/register" className = "neon-button"> Register </Link>
        </div>
    );
}