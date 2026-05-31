import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function TopicNode({ image, title, description, isPlaceholder, urlSlug }) {
    const [isOpen, setIsOpen] = useState(false);
    
    const navigate = useNavigate(); 

    // Toggle the popup. Does nothing if it's a ? node
    const handleNodeClick = () => {
        if (!isPlaceholder) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className="topic-node-container">
            
            {/* The Popup Window */}
            {isOpen && (
                <div className="topic-popup">
                    <p className="topic-description">{description}</p>
                    <div className="topic-actions">
                        
                        {/* 4. Attach the onClick events to route the user */}
                        <button 
                            className="popup-btn practice-btn"
                            onClick={() => navigate(`/practice/${urlSlug}`)}
                        >
                            Practice
                        </button>
                        
                        <button 
                            className="popup-btn read-btn"
                            onClick={() => navigate(`/read/${urlSlug}`)}
                        >
                            Read
                        </button>
                        
                    </div>
                </div>
            )}

            {/* The Main Icon Button */}
            <button 
                className={`topic-icon-btn ${isOpen ? 'active' : ''} ${isPlaceholder ? 'placeholder' : ''}`}
                onClick={handleNodeClick}
            >
                {isPlaceholder ? (
                    <span className="question-mark">?</span>
                ) : (
                    image && <img src={image} alt={title} className="node-image" />
                )}
            </button>

            {/* The Title Underneath */}
            <h3 className="topic-title">{title}</h3>

        </div>
    );
}