import React from 'react';

export default function Login() {
    return (
        <div className = "login-container">
            <h1>Sign In</h1>
            <div className = "username">
                <input type = "text" placeholder = "Username"/>
            </div>
            <div className = "password">
                <input type = "password" placeholder = "Password"/>
            </div>
        </div>
    );
}