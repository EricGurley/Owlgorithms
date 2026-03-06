import React, { useState } from 'react';

export default function App() {

  const [currentBackground, setCurrentBackground] = useState('bg-retro');

  return (
    <div className = {`app-wrapper ${currentBackground}`}>

      <button onClick={() => setCurrentBackground('bg-rocket')}>
        yay
      </button>
      
    </div>
  );
}
