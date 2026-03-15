import React from 'react';

export default function Login() {
    return (
        <div className = "login-container">
            <h1>Sign In</h1>
            <div className = "email">
                <input type = "text" placeholder = "Email"/>
            </div>
            <div className = "password">
                <input type = "password" placeholder = "Password"/>
            </div>
        </div>
    );
}