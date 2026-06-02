import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { practiceProblems } from '../data/practiceProblems.js';

import PracticeSidebar from '../components/Practice/PracticeSidebar';
import QuestionCanvas from '../components/Practice/QuestionCanvas';
import ActionFooter from '../components/Practice/ActionFooter';

// Helper function to shuffle an array (Fisher-Yates)
const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default function PracticeSession() {
    const { topicSlug } = useParams();
    const rawBlueprints = practiceProblems[topicSlug];
    
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
    }, [topicSlug]); 

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
        if (!activeProblemData) return;

        if (parseFloat(userAnswer) === activeProblemData.correctAnswer) {
            alert("Correct!");
            handleNext(); 
        } else {
            alert("Try again.");
        }
    };

    if (!rawBlueprints) return <div style={{ color: 'white', textAlign: 'center', marginTop: '100px' }}>No problems found for this topic.</div>;
    if (!activeProblemData) return <div style={{ color: 'white', textAlign: 'center', marginTop: '100px' }}>Loading problem...</div>;

    return (
        <div className="practice-layout-grid">
            
            
            <PracticeSidebar 
                currentTopic={topicSlug} 
                totalProblems={sessionSequence.length}
                currentIndex={currentIndex}
            />

            <div className="practice-main-column">
                <div className="problem-container">
                    <QuestionCanvas prompt={activeProblemData.prompt} />
                    
                    {activeProblemData.type === 'multiple-choice' ? (
                        <>
                            <div style={{ color: '#888', fontStyle: 'italic' }}>
                                [Multiple Choice Panel will go here]
                            </div>
                        </>
                    ) : (
                        <>
                            <input 
                                type="number" 
                                value={userAnswer} 
                                onChange={(e) => setUserAnswer(e.target.value)} 
                                placeholder="Type your answer..."
                                style={{ 
                                    padding: '15px', fontSize: '1.2rem', borderRadius: '8px', 
                                    border: '2px solid #333', backgroundColor: '#111', color: 'white',
                                    width: '100%', maxWidth: '300px', fontFamily: 'Beowulf Modern' 
                                }}
                            />
                        </>
                    )}

                    {showSolution && (
                        <div style={{ 
                            marginTop: '40px', padding: '25px', backgroundColor: '#1a1a1a', 
                            borderRadius: '8px', borderLeft: '4px solid #aa32ff' 
                        }}>
                            <h3 style={{ color: '#aa32ff', margin: '0 0 15px 0' }}>Solution</h3>
                            <p style={{ whiteSpace: 'pre-line', margin: '0 0 20px 0', lineHeight: '1.6', fontSize: '1.1rem' }}>
                                {activeProblemData.solution}
                            </p>
                            <button 
                                onClick={handleNext}
                                style={{ 
                                    padding: '10px 25px', backgroundColor: '#333', color: 'white', 
                                    border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem'
                                }}
                            >
                                Next Question ➔
                            </button>
                        </div>
                    )}

                </div>

                <ActionFooter 
                    onCheck={handleSubmit} 
                    onViewSolution={() => setShowSolution(true)} 
                />
                
            </div>
        </div>
    );
}