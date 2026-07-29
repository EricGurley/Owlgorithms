import React from 'react';

export default function QuestionCanvas({ prompt }) {
    return (
        <div className="question-canvas-container">
            <h2 className="question-canvas-text">
                {prompt}
            </h2>
        </div>
    );
}