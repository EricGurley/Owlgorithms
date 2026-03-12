import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Read from './pages/Read';
import Practice from './pages/Practice';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {

  const [currentBackground, setCurrentBackground] = useState('bg-retro');

  return (
    <BrowserRouter>
      <div className = {`app-wrapper ${currentBackground}`}>

        <button className = 'yay' onClick={() => setCurrentBackground('bg-rocket')}>
          yay
        </button>

        <Link to="/"> Practice </Link>
        <Link to="/read"> Read </Link>

        <Routes>
          <Route path="/" element={<Practice />} />
          <Route path="/read" element={<Read />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}
