import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signInWithEmailAndPassword,
         browserLocalPersistence, browserSessionPersistence, 
         setPersistence, GoogleAuthProvider } from 'firebase/auth';

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(true);

    //Remember me

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const persistenceType = rememberMe ? browserLocalPersistence : browserSessionPersistence;
        
            await setPersistence(auth, persistenceType);

            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log("Logged in with email: ", result.user.email);
            navigate('/');
        } catch (error) {
            console.error("Login failed: ", error.message);
        }
    };

    // Sign in with google

    const handleGoogleLogin = async () => {
        try {
            const persistenceType = rememberMe ? browserLocalPersistence : browserSessionPersistence;
            await setPersistence(auth, persistenceType);

            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, googleProvider);

            const user = result.user;
            console.log("User logged in: ", user.displayName);
            console.log("User's email: ", user.email);
            navigate('/');
        } catch (error) {
            console.error("Couldn't sign in to google: ", error.message);
        }   
    }

    // Reset password

    const handleResetPassword = async () => {
        if (!email) {
            alert("Please enter your email address in the box first!");
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            alert("Password reset email sent! Check your inbox (and spam folder).");
        } catch (error) {
            console.error("Error resetting password:", error);
            alert("Failed to send reset email. Make sure the address is correct.");
        }
    };

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

                <p onClick={() => navigate('/forgot-password')} className="forgot-password-link">
                    Forgot Password?
                </p>

                <div className="remember-me-container">
                    <input 
                        type="checkbox" 
                        id="rememberMe" 
                        checked={rememberMe} 
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="neon-checkbox"
                    />
                    <label htmlFor="rememberMe" className="neon-checkbox-label">
                        Remember Me
                    </label>
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