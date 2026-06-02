import React from 'react';
import { Link } from 'react-router-dom';

export default function PracticeSidebar({ currentTopic, totalProblems, currentIndex }) {
    
    // Generate an array like [0, 1, 2, 3, 4] to map over
    const problemArray = Array.from({ length: totalProblems }, (_, i) => i);

    return (
        <div style={{ 
            borderRight: '1px solid #333', 
            padding: '40px 20px', 
            backgroundColor: 'rgba(10, 10, 10, 0.95)', 
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
        }}>
            
            <Link to="/" style={{ color: '#fff', fontFamily: 'Beowulf Modern', textDecoration: 'none', display: 'block' }}>
                ◀ Back to Map
            </Link>
            
            {/* The Topic Header */}
            <div>
                <h2 style={{ fontFamily: 'Beowulf Modern', marginBottom: '15px', fontSize: '1.5rem', color: '#fff' }}>
                    Current Topic
                </h2>
                <div style={{ 
                    padding: '12px', 
                    backgroundColor: '#aa32ff33', 
                    borderLeft: '4px solid #aa32ff', 
                    borderRadius: '4px',
                    fontFamily: 'Beowulf Modern',
                    fontWeight: 'bold',
                    letterSpacing: '1px'
                }}>
                    {currentTopic.replace('-', ' ').toUpperCase()}
                </div>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h3 style={{ fontFamily: 'Beowulf Modern', marginBottom: '15px', color: '#ccc' }}>
                    Session Progress
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {problemArray.map((index) => {
                        const isActive = index === currentIndex;
                        const isCompleted = index < currentIndex;
                        
                        return (
                            <div 
                                key={index}
                                style={{
                                    padding: '10px 15px',
                                    borderRadius: '6px',
                                    backgroundColor: isActive ? 'rgba(170, 50, 255, 0.15)' : 'transparent',
                                    border: isActive ? '1px solid #aa32ff' : '1px solid transparent',
                                    color: isActive ? '#aa32ff' : '#ffffff', /* UPDATED: Now white instead of #888 when inactive */
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}
                            >
                                <div style={{ 
                                    width: '8px', 
                                    height: '8px', 
                                    borderRadius: '50%', 
                                    backgroundColor: isActive ? '#aa32ff' : (isCompleted ? '#aaaaaa' : '#ffffff') /* UPDATED */
                                }} />
                                
                                <span style={{ fontFamily: 'Beowulf Modern', fontSize: '1.2rem' }}> {/* UPDATED: Font changed */}
                                    Problem {index + 1}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </div>
    );
}