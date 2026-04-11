import React from 'react';
import { Link } from 'react-router-dom';
import OneOne from './Topics/OneOne';

const ChapterTwo = ({ activeTopic }) => {

    const renderTopic = () => {
        switch (activeTopic) {
        case '2':
        default:
            return (
                <h1>Orbital Mechanics</h1>
            );
        };
    }

    return (
        <div className = "chapter-two-container">
            <h1> Chapter Two </h1>

            {renderTopic() }
        </div>
    );
}

export default ChapterTwo;