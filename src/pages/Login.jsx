import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

export default function Login() {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login submitted");
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
        <div className="login-container">
            <h1>Sign In</h1>
            
            <form className="login-creds-list" onSubmit={handleLogin}>
                
                <div className="login-input">
                    <input
                        type="text"
                        placeholder="Username"
                        required 
                        value = {username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                </div>
                
                <div className="login-input">
                    <input type="password"
                    placeholder="Password"
                    required
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="submit-wrapper">
                    <button type="submit" className="neon-button">
                        LOGIN
                    </button>
                </div>

                <div className="submit-wrapper">
                    <button
                        type="button"
                        className="neon-button google-login"
                        onClick={handleGoogleLogin}
                    >
                        Login With Google
                    </button>
                </div>

            </form>
        </div>
    );
}