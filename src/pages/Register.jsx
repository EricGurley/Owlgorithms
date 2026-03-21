import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import ValidatedInput from '../components/ValidatedInput';

const Register = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');
    const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

    useEffect(() => {
        if (confirmPasswordTouched && confirmPassword.length > 0) {
            if (password !== confirmPassword) {
                setPasswordMatchError("Passwords don't match");
            } else {
                setPasswordMatchError(""); 
            }
        }
    }, [password, confirmPassword, confirmPasswordTouched]);
    
    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            console.error("Passwords don't match");
            return;
        }

        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const user = result.user;

            await updateProfile (user, {displayName: username});

            console.log("User registered successfully: ", user.email);
            console.log("Profile username: ", user.displayName);
            navigate('/');
        } catch (error) {
            console.error("Registration failed: ", error.message);
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
        <div className="register-container">
            <h1>Sign Up</h1>
            
            <form className="register-creds-list" onSubmit={handleRegister}>
                
                <div className="register-input">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        required 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                
                <div className="register-input">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                
                <div className="register-input">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <ValidatedInput 
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={() => setConfirmPasswordTouched(true)}
                    error={passwordMatchError}
                />

                <div className="submit-wrapper">
                    <button type="submit" className="neon-button">
                        Register
                    </button>
                </div>

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