import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPracticeProblems } from '../data/practiceRegistry.js';

import PracticeSidebar from '../components/Practice/PracticeSidebar';
import QuestionCanvas from '../components/Practice/QuestionCanvas';
import ActionFooter from '../components/Practice/ActionFooter';

const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default function PracticeSession() {
    const { courseId, topicSlug } = useParams();
    
    const rawBlueprints = getPracticeProblems(courseId, topicSlug);
    
    const [sessionSequence, setSessionSequence] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeProblemData, setActiveProblemData] = useState(null);
    const [userAnswer, setUserAnswer] = useState("");
    const [showSolution, setShowSolution] = useState(false);

    useEffect(() => {
        if (rawBlueprints) {
            const shuffled = shuffleArray(rawBlueprints);
            const selectedProblems = shuffled.slice(0, 5);
            setSessionSequence(selectedProblems);
            setCurrentIndex(0); 
        }
    }, [topicSlug, courseId]); 

    useEffect(() => {
        if (sessionSequence.length > 0 && sessionSequence[currentIndex]) {
            const currentBlueprint = sessionSequence[currentIndex];
            setActiveProblemData(currentBlueprint.generate());
        }
    }, [currentIndex, sessionSequence]);

    const handleNext = () => {
        if (currentIndex < sessionSequence.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setUserAnswer(""); 
            setShowSolution(false); 
        } else {
            alert("You've finished all the problems for this topic!");
        }
    };

    const handleSubmit = () => {
        if (!activeProblemData || !userAnswer) return;

        const isCorrect = activeProblemData.options
            ? userAnswer === activeProblemData.correctAnswer
            : parseFloat(userAnswer) === activeProblemData.correctAnswer;

        if (isCorrect) {
            alert("Correct!");
            handleNext(); 
        } else {
            alert("Try again.");
        }
    };

    if (!rawBlueprints) return <div className="practice-session-status-msg">No problems found for this topic.</div>;
    if (!activeProblemData) return <div className="practice-session-status-msg">Loading problem...</div>;

    // Check if current question has multiple choice options
    const isMultipleChoice = Array.isArray(activeProblemData.options) && activeProblemData.options.length > 0;

    return (
        <div className="practice-layout-grid">
            <PracticeSidebar 
                currentTopic={topicSlug} 
                totalProblems={sessionSequence.length}
                currentIndex={currentIndex}
            />

            <div className="practice-main-column">
                <div className="problem-container">
                    <QuestionCanvas 
                        prompt={activeProblemData.prompt} 
                        image={activeProblemData.image} 
                    />
                    
                    {isMultipleChoice ? (
                        <div className="mc-options-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px', alignItems: 'center' }}>
                            {activeProblemData.options.map((option, idx) => {
                                const isSelected = userAnswer === option;
                                return (
                                    <button
                                        key={idx}
                                        type="button"
                                        className={`neon-button ${isSelected ? 'active' : ''}`}
                                        onClick={() => setUserAnswer(option)}
                                        style={{
                                            width: '80%',
                                            maxWidth: '500px',
                                            padding: '12px 20px',
                                            textAlign: 'left',
                                            borderColor: isSelected ? '#a855f7' : '',
                                            backgroundColor: isSelected ? 'rgba(168, 85, 247, 0.25)' : 'transparent',
                                            boxShadow: isSelected ? '0 0 12px #a855f7' : 'none'
                                        }}
                                    >
                                        {String.fromCharCode(65 + idx)}) {option}
                                    </button>
                                );
                            })}
                        </div>
                    ) : (
                        <input 
                            type="number" 
                            className="practice-number-input"
                            value={userAnswer} 
                            onChange={(e) => setUserAnswer(e.target.value)} 
                            placeholder="Type your answer..."
                        />
                    )}

                    {showSolution && (
                        <div className="practice-solution-card">
                            <h3 className="practice-solution-heading">Solution</h3>
                            <p className="practice-solution-text">
                                {activeProblemData.solution}
                            </p>
                        </div>
                    )}
                </div>

                <ActionFooter 
                    onCheck={handleSubmit} 
                    onViewSolution={() => setShowSolution(true)} 
                    onNext={handleNext}
                />
            </div>
        </div>
    );
}