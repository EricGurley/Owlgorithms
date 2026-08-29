import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TopicNode({ 
    image, 
    title, 
    description, 
    isPlaceholder, 
    courseId = 'astrophysics-1', // Defaults to original course if unspecified
    urlSlug, 
    difficulty = 0 
}) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); 

    const formattedImage = image && image.startsWith('/')
        ? `${import.meta.env.BASE_URL}${image.slice(1)}`
        : image;

    const handleNodeClick = () => {
        if (!isPlaceholder) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className="topic-node-container">
            {isOpen && (
                <div className="topic-popup">
                    <p className="topic-description">{description}</p>
                    <div className="topic-actions">
                        <button 
                            className="popup-btn practice-btn"
                            onClick={() => navigate(`/practice/${courseId}/${urlSlug}`)}
                        >
                            Practice
                        </button>
                        
                        <button 
                            className="popup-btn read-btn"
                            onClick={() => navigate(`/read/${courseId}/${urlSlug}`)}
                        >
                            Read
                        </button>
                    </div>

                    <div className="difficulty-container">
                        <p className="difficulty-label">Difficulty:</p>
                        <div className="difficulty-boxes">
                            <div className={`diff-box ${difficulty >= 1 ? `filled-${difficulty}` : ''}`}></div>
                            <div className={`diff-box ${difficulty >= 2 ? `filled-${difficulty}` : ''}`}></div>
                            <div className={`diff-box ${difficulty >= 3 ? `filled-${difficulty}` : ''}`}></div>
                        </div>
                    </div>
                </div>
            )}

            <button 
                className={`topic-icon-btn ${isOpen ? 'active' : ''} ${isPlaceholder ? 'placeholder' : ''}`}
                onClick={handleNodeClick}
            >
                {isPlaceholder ? (
                    <span className="question-mark">?</span>
                ) : (
                    formattedImage && <img src={formattedImage} alt={title} className="node-image" />
                )}
            </button>

            <h3 className="topic-title">{title}</h3>
        </div>
    );
}