import React, { useState } from 'react';

export default function Login() {
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login submitted");
    };

    return (
        <div className="login-container">
            <h1>Sign In</h1>
            
            <form className="login-creds-list" onSubmit={handleLogin}>
                
                <div className="login-input">
                    <input type="text" placeholder="Username" required />
                </div>
                
                <div className="login-input">
                    <input type="password" placeholder="Password" required />
                </div>

                <div className="submit-wrapper">
                    <button type="submit" className="neon-button">
                        LOGIN
                    </button>
                </div>

            </form>
        </div>
    );
}