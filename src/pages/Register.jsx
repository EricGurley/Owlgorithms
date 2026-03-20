import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

const Register = () => {

    const navigate = useNavigate();
    
    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log("User logged in: ", user.displayName);
            console.log("User's email: ", user.email);
            navigate('/');
        } catch (error) {
            console.error("Couldn't sign in to google: ", error.message);
        }   
    }

    return (
        <div className="register-container">
            <h1>Sign Up</h1>
            
            <form className="register-creds-list" onSubmit={handleRegister}>
                
                <div className="register-input">
                    <input type="text" placeholder="Username" required />
                </div>
                
                <div className="register-input">
                    <input type="email" placeholder="Email" required />
                </div>
                
                <div className="register-input">
                    <input type="password" placeholder="Password" required />
                </div>
                
                <div className="register-input">
                    <input type="password" placeholder="Confirm Password" required />
                </div>

                <button type="submit" className="neon-button">
                    Register
                </button>

                <div className="submit-wrapper">
                    <button
                        type="button"
                        className="neon-button google-login"
                        onClick={handleGoogleLogin}
                    >
                        Sign Up With Google
                    </button>
                </div>

            </form>
        </div>
    );
}

export default Register;