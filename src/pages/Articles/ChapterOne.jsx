import React from 'react';
import { Link } from 'react-router-dom';

const ChapterOne = ({activeTopic}) => {

    const renderTopic = () => {
        switch(activeTopic) {
            case 'chapter-1':
            default:
                return (
                    <h1>Welcome to Astrophysics!!!</h1>
                );
            case '1.1':
                return (
                    <h1>Equitorial Coordinates</h1>
                );
        }
    }

    return (
        <div className = "chapter-one">
            <h1>The Celestial Sphere</h1>

            {renderTopic()}
        </div>
    );
}

export default ChapterOne;