import React from 'react';

const Register = () => {
    return (
        <div className = "register_container">
            <h1>Sign Up</h1>
            <div className = "username">
                <input type = "text" placeholder = "Username"/>
            </div>
            <div className = "email">
                <input type = "text" placeholder = "Email"/>
            </div>
            <div className = "password">
                <input type = "password" placeholder = "Password"/>
            </div>
            <div className = "confirm-password">
                <input type = "password" placeholder = "Confirm Password"/>
            </div>
        </div>
    );
}

export default Register;