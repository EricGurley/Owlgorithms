import React, { useState } from 'react';
import ChapterOne from './Articles/ChapterOne';
import ChapterTwo from './Articles/ChapterTwo';
import PageNav from '../components/PageNav';
import Contents from '../components/Contents';

const Read = () => {

    const table = [
        { id: '0', title: "Preface", type: 'section', page: 'I' },
        { id: '1', title: "I. The Tools Of Astronomy", type: 'section', page: 'II' },
        { id: '1.0', title: "1. The Celestial Sphere", type: 'chapter', section: '1', page: 'III' },
        { id: '1.1', title: "1.1 Altitude Azimuth", type: 'topic', chapter: '1.0', page: '1' },
        { id: '1.2', title: "1.2 Equitorial Coordinate System", type: 'topic', chapter: '1.0', page: '2' },
        { id: '1.3', title: "1.3 Right Ascension And Declination", type: 'topic', chapter: '1.0', page: '3' },
        { id: '1.4', title: "1.4 The Celestial Sphere", type: 'topic', chapter: '1.0', page: '4' },
        { id: '1.5', title: "1.5 Order Of The Planets", type: 'topic', chapter: '1.0', page: '5' },
        { id: '1.6', title: "1.6 Synodic And Sidereal Periods", type: 'topic', chapter: '1.0', page: '6' },
        { id: '1.7', title: "1.7 Precession", type: 'topic', chapter: '1.0', page: '7' },
        { id: '1.8', title: "1.8 Measurements Of Time", type: 'topic', chapter: '1.0', page: '8' },
        { id: '1.9', title: "1.9 Proper Motion", type: 'topic', chapter: '1.0', page: '9' },
        { id: '1.10', title: "1.10 Spherical Trigonometry", type: 'topic', chapter: '1.0', page: '10' },
        { id: '2.0', title: "2. Orbital Mechanics", type: 'chapter', section: '1', page: '11' },
    ];

    const [activeSection, setActiveSection] = useState('1');
    const [activeChapter, setActiveChapter] = useState(null); 
    const [activeTopic, setActiveTopic] = useState('1.1'); 
    

    const renderChapter = () => {
        switch (activeChapter) {
            case '1.0':
            default:
                return <ChapterOne activeTopic={activeTopic}/>;
            case '2.0':
                return <ChapterTwo activeTopic={activeTopic}/>;
            }
    };

    return (
        <div className="read-container">
            
            <Contents
                table={table}
                activeSection={activeSection} 
                setActiveSection={setActiveSection}
                activeChapter={activeChapter} 
                setActiveChapter={setActiveChapter}
                activeTopic={activeTopic}
                setActiveTopic={setActiveTopic}
            />

            <div className='articles-and-nav-container'>

                {renderChapter() }

                <PageNav
                    table={table}
                    activeTopic={activeTopic}
                    setActiveChapter={setActiveChapter}
                    setActiveTopic={setActiveTopic}
                    setActiveSection={setActiveSection}
                />
            </div>
        </div>
    );
}

export default Read;