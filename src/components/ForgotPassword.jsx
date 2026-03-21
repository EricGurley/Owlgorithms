import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleReset = async (e) => {
        e.preventDefault();
        if (!email) {
            setMessage("Please enter your email address.");
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Check your inbox! A reset link has been sent.");
        } catch (error) {
            console.error("Error resetting password:", error);
            setMessage("Failed to send reset email. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <h1 style={{ marginBottom: '20px' }}>Recover Access</h1>
            
            <form className="login-creds-list" onSubmit={handleReset}>
                <div className="login-input">
                    <input 
                        type="email" 
                        placeholder="email address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="neon-button">
                    Send Reset Link
                </button>
            </form>

            {message && (
                <p style={{ fontFamily: 'Beowulf Modern', color: '#ff00ff', marginTop: '20px', fontSize: '1.4rem', textShadow: '0 0 10px #ff00ff' }}>
                    {message}
                </p>
            )}

            <p 
                onClick={() => navigate('/login')} 
                className="forgot-password-link" 
                style={{ marginTop: '30px' }}
            >
                Back to Login
            </p>
        </div>
    );
};

export default ForgotPassword;