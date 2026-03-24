import React from 'react';
import { Link } from 'react-router-dom';

const ChapterOne = ({activeTopic}) => {

    const renderTopic = () => {
        switch(activeTopic) {
            case 'preface':
                return (
                    <h1>Welcome To Astrophysics!!!</h1>
                );
            case 'chapter-1':
            case '1.1':
            default:
                return (
                    <h1>The Altitude-Azimuth Coordinate System</h1>
                );
            case '1.2':
                return (
                    <h1>The Equitorial Coordinate System</h1>
                );
        }
    }

    return (
        <div className = "chapter-one">
            {renderTopic()}
        </div>
    );
}

export default ChapterOne;