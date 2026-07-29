import React from 'react';
import { Link } from 'react-router-dom';

export default function PracticeSidebar({ currentTopic, totalProblems, currentIndex }) {
    const problemArray = Array.from({ length: totalProblems }, (_, i) => i);

    return (
        <div className="practice-sidebar">
            <Link to="/" className="neon-button back-to-map-pill">
                ◀ Back to Map
            </Link>
            
            <div>
                <h2 className="sidebar-heading">Current Topic</h2>
                <div className="sidebar-topic-badge">
                    {currentTopic ? currentTopic.replace('-', ' ').toUpperCase() : ''}
                </div>
            </div>

            <div className="sidebar-progress-container">
                <h3 className="sidebar-subheading">Session Progress</h3>
                
                <div className="sidebar-progress-list">
                    {problemArray.map((index) => {
                        const isActive = index === currentIndex;
                        const isCompleted = index < currentIndex;
                        
                        return (
                            <div 
                                key={index}
                                className={`sidebar-progress-item ${isActive ? 'active' : ''}`}
                            >
                                <div 
                                    className={`sidebar-progress-dot ${isActive ? 'active' : (isCompleted ? 'completed' : 'pending')}`} 
                                />
                                
                                <span className="sidebar-progress-text">
                                    Problem {index + 1}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}