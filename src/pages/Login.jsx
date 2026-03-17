import React from 'react';

export default function Login() {
    return (
        <div className = "login-container">
            <h1>Sign In</h1>
            <div className = "login-creds-list">
                <div className = "login-input">
                    <input type = "text" placeholder = "Username"/>
                </div>
                <div className = "login-input">
                    <input type = "password" placeholder = "Password"/>
                </div>
            </div>
        </div>
    );
}