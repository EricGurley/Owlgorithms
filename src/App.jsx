import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import CourseCatalog from './pages/CourseCatalog';
import Practice from './pages/Practice';
import PracticeSession from './pages/PracticeSession';
import Read from './pages/Read';
import Login from './pages/Login';
import Register from './pages/Register';
import Donate from './pages/Donate';
import Profile from './pages/Profile';
import ForgotPassword from './components/ForgotPassword';
import Navbar from './components/Navbar';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentBackground] = useState('bg-retro');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="loading-screen">Loading...</div>;

  return (
    <BrowserRouter>
      <div className={`app-wrapper ${currentBackground}`}>
        
        <video className="video-background" autoPlay loop muted playsInline>
          <source src="/Images/Backgrounds/BG-Seamless.mp4" type="video/mp4" />
        </video>
        
        <div className="video-background-overlay" />

        <Navbar user={user} />

        <Routes>
          <Route path="/" element={<CourseCatalog />} />
          
          <Route path="/course/astrophysics-1" element={<Practice />} />
          
          <Route path="/practice/:courseId/:topicSlug" element={<PracticeSession />} />
          <Route path="/practice/:topicSlug" element={<PracticeSession />} />
          
          <Route path="/read" element={<Read />} />
          <Route path="/read/:courseId/:topicSlug" element={<Read />} />
          <Route path="/read/:topicSlug" element={<Read />} />
          
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/profile" /> : <Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;