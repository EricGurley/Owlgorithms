import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import { doc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { auth, googleProvider, db } from '../firebase';
import zxcvbn from 'zxcvbn';
import ValidatedInput from '../components/ValidatedInput';
import * as EmailValidator from 'email-validator';
import leoProfanity from 'leo-profanity';

const Register = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');
    const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
    const [passwordStrengthError, setPasswordStrengthError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    const [usernameError, setUsernameError] = useState('');


    // Check if username is already in use

    useEffect(() => {
        const checkUsernameAvailability = async () => {
            if (username.length > 0) {
                
                if (leoProfanity.check(username)) {
                    setUsernameError("Please keep usernames clean and family-friendly.");
                    return; 
                } 
                
                if (username.length < 3) {
                    setUsernameError("Username must be at least 3 characters.");
                    return; 
                }

                try {
                    const usersRef = collection(db, "users");
                    const q = query(usersRef, where("username", "==", username));
                    const querySnapshot = await getDocs(q);

                    if (!querySnapshot.empty) {
                        setUsernameError("This username is already taken!");
                    } else {
                        setUsernameError("");
                    }
                } catch (error) {
                    console.error("Error checking username: ", error);
                }

            } else {
                setUsernameError("");
            }
        };

        checkUsernameAvailability();
        
    }, [username]);

    // Offensive or ineffective username porevention

    useEffect(() => {
        if (username.length > 0) {
            if (leoProfanity.check(username)) {
                setUsernameError("Please keep usernames clean and family-friendly.");
            } 
            else if (username.length < 3) {
                setUsernameError("Username must be at least 3 characters.");
            } 
            else {
                setUsernameError("");
            }
        } else {
            setUsernameError("");
        }
    }, [username]);


    // Password matching validation

    useEffect(() => {
        if (confirmPasswordTouched && confirmPassword.length > 0) {
            if (password !== confirmPassword) {
                setPasswordMatchError("Passwords don't match");
            } else {
                setPasswordMatchError(""); 
            }
        }
    }, [password, confirmPassword, confirmPasswordTouched]);


    // Password strength validation

    useEffect(() => {
        if (password.length > 0) {
            const evaluation = zxcvbn(password);
            
            if (evaluation.score < 3) {
                setPasswordStrengthError(
                    evaluation.feedback.warning || "Password is too weak. Add words or numbers."
                );
            } else {
                setPasswordStrengthError("");
            }
        } else {
            setPasswordStrengthError("");
        }
    }, [password]);


    // Email validation

    useEffect(() => {
        if (emailTouched && email.length > 0) {
            
            const isValid = EmailValidator.validate(email);
            
            if (!isValid) {
                setEmailError("Please enter a valid email address.");
            } else {
                setEmailError(""); 
            }
        } else {
            setEmailError("");
        }
    }, [email, emailTouched]);
    
    const handleRegister = async (e) => {
        e.preventDefault();

        // Username taken
        if (usernameError !== "") {
            console.error("This username is taken!");
            return;
        }

        // Valid email

        if (!EmailValidator.validate(email)) {
            setEmailError("Invalid email");
            return;
        }

        // Matching passwords

        if (password !== confirmPassword) {
            setPasswordMatchError("Passwords don't match");
            return;
        }

        // Password strength

        if (zxcvbn(password).score < 3) {
            setPasswordStrengthError("This password is too weak");
            return;
        }

        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const user = result.user;

            await updateProfile (user, {displayName: username});

            await setDoc(doc(db, "users", user.uid), {
                username: username,
                email: email,
                accountCreated: new Date(),
                role: "astronomer"
            });

            console.log("User registered successfully: ", user.email);
            navigate('/');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setEmailError("This email is already in use!");
            } 
            else if (error.code === 'auth/too-many-requests') {
                setEmailError("Too many attempts! Please wait a moment.");
            }
            else {
                setEmailError("An error occurred during registration.");
                console.error("Firebase Error: ", error.message);
            }
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
                
                <ValidatedInput 
                    type="text" 
                    placeholder="Username" 
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={usernameError}
                />
                
                <ValidatedInput 
                    type="email" 
                    placeholder="Email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setEmailTouched(true)}
                    error={emailError}
                />
                
                <ValidatedInput 
                    type="password" 
                    placeholder="Password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={passwordStrengthError}
                />
                
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