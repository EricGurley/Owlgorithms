import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

// Primary application navigation bar; dynamically toggles profile and authentication controls.
const Navbar = ({ user }) => {
  const navigate = useNavigate();

  // Signs user out of Firebase auth and redirects to login route
  const handleLogout = () => {
    signOut(auth);
    navigate('/login');
  };

  return (
    <nav className="navbar">
        <div className="nav-links">
            <Link to="/" className="neon-button nav-btn">Practice</Link>
            <Link to="/read" className="neon-button nav-btn">Read</Link>
            <Link to="/donate" className="neon-button nav-btn">Donate</Link>
            
            {user ? (
                <>
                    <Link to="/profile" className="neon-button nav-btn">Profile</Link>
                    <button onClick={handleLogout} className="neon-button nav-btn">Sign Out</button>
                </>
            ) : (
                <>
                    <Link to="/login" className="neon-button nav-btn">Sign In</Link>
                    <Link to="/register" className="neon-button nav-btn">Register</Link>
                </>
            )}
        </div>
    </nav>
  );
};

export default Navbar;