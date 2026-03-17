import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className = "navbar-container">
            <Link to="/"> Practice </Link>
            <Link to="/read"> Read </Link>
            <Link to="/login"> Login </Link>
            <Link to="/register"> Register </Link>
        </div>
    );
}