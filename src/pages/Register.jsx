import React, { useState } from 'react';

const Register = () => {
    
    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };

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
                    Submit
                </button>

            </form>
        </div>
    );
}

export default Register;