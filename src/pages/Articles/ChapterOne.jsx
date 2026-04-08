import React from 'react';
import { Link } from 'react-router-dom';
import OneOne from './Topics/OneOne';

const ChapterOne = (activeTopic) => {

    const renderTopic = (activeTopic) => {
            switch (activeTopic) {
            case '1.1':
            default:
                return <OneOne />;
            }
        };

    return (
        <div className = "chapter-one-container">
            <h1> Chapter One </h1>

            {renderTopic() }
        </div>
    );
}

export default ChapterOne;