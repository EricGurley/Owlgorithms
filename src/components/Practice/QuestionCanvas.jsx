import React from 'react';

export default function QuestionCanvas({ prompt, image }) {
    const formattedImage = image && image.startsWith('/')
        ? `${import.meta.env.BASE_URL}${image.slice(1)}`
        : image;

    return (
        <div className="question-canvas-container">
            <h2 className="question-canvas-text">
                {prompt}
            </h2>
            {formattedImage && (
                <div className="question-diagram-container" style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <img 
                        src={formattedImage} 
                        alt="Celestial Sphere Diagram" 
                        className="question-diagram-img"
                        style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain' }}
                    />
                </div>
            )}
        </div>
    );
}