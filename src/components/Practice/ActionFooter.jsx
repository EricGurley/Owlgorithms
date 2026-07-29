import React from 'react';

export default function ActionFooter({ onCheck, onViewSolution, onNext }) {
    return (
        <div className="action-footer">
            <button 
                className="neon-button view-solution-btn"
                onClick={onViewSolution}
            >
                View Solution
            </button>

            <div className="action-footer-right">
                <button 
                    className="neon-button check-answer-btn"
                    onClick={onCheck}
                >
                    Check Answer
                </button>
                
                <button 
                    className="neon-button next-question-btn"
                    onClick={onNext}
                >
                    Next Question
                </button>
            </div>
        </div>
    );
}