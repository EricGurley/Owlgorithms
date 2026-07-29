import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { practiceProblems } from '../data/practiceProblems.js';

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

    if (!rawBlueprints) return <div className="practice-session-status-msg">No problems found for this topic.</div>;
    if (!activeProblemData) return <div className="practice-session-status-msg">Loading problem...</div>;

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
                        <div className="mc-panel-placeholder">
                            [Multiple Choice Panel will go here]
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