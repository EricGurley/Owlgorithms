import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log("Logged in with email: ", result.user.email);
            navigate('/');
        } catch (error) {
            console.error("Login failed: ", error.message);
        }
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
                        type="email"
                        placeholder="Email"
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
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