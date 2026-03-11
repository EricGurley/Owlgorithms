import React, { useState } from 'react';
import Read from './pages/Read';
import Practice from './pages/Practice';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {

  const [currentBackground, setCurrentBackground] = useState('bg-retro');

  return (
    <div className = {`app-wrapper ${currentBackground}`}>

      <button classname = 'yay' onClick={() => setCurrentBackground('bg-rocket')}>
        yay
      </button>

      <Read/>
      <Practice/>
      <Login/>
      <Signup/>

    </div>
  );
}
