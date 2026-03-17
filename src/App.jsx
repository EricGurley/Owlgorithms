import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Read from './pages/Read';
import Practice from './pages/Practice';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar'

export default function App() {

  const [currentBackground, setCurrentBackground] = useState('bg-retro');

  return (
    <BrowserRouter>
      <div className = {`app-wrapper ${currentBackground}`}>

        <video
          className = "video-background"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src = "/Images/Backgrounds/BG-Seamless.mp4" type = "video/mp4"></source>
        </video>

        <Navbar />

        <Routes>
          <Route path="/" element={<Practice />} />
          <Route path="/read" element={<Read />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}
