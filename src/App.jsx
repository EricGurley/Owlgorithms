import React, { useState } from 'react';
import Read from './pages/Read';
import Practice from './pages/Practice';

export default function App() {

  const [currentBackground, setCurrentBackground] = useState('bg-retro');

  return (
    <div className = {`app-wrapper ${currentBackground}`}>

      <button onClick={() => setCurrentBackground('bg-rocket')}>
        yay
      </button>

      <Read ></Read>
      <Practice ></Practice>
      
    </div>
  );
}
