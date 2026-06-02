import React from 'react';

export default function ActionFooter({ onCheck, onViewSolution }) {
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '20px 0',
            borderTop: '1px solid #333',
            marginTop: '40px'
        }}>
            <button 
                onClick={onViewSolution}
                style={{ 
                    background: 'transparent', 
                    color: '#ffffff',
                    fontFamily: 'Beowulf Modern',
                    border: 'none', 
                    cursor: 'pointer', 
                    fontSize: '1.2rem' 
                }}
            >
                View Solution
            </button>
            
            <button 
                className="neon-button" 
                onClick={onCheck}
                style={{ padding: '10px 40px', fontSize: '1.2rem' }}
            >
                Check Answer
            </button>
        </div>
    );
}