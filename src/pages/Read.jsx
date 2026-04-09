import React, { useState } from 'react';
import ChapterOne from './Articles/ChapterOne';
import ChapterTwo from './Articles/ChapterTwo';
import PageNav from '../components/PageNav';
import Contents from '../components/Contents';

const Read = () => {

    const table = [
        { id: '1', title: "I. The Tools Of Astronomy", type: 'section' },
        { id: '1.0', title: "1. The Celestial Sphere", type: 'chapter', section: '1' },
        { id: '1.1', title: "1.1 Equatorial Coordinates", type: 'topic', chapter: '1.0' },
        { id: '1.2', title: "1.2 The Copernican Revolution", type: 'topic', chapter: '1.0' },
        { id: '2.0', title: "2. Orbital Mechanics", type: 'chapter', section: '1' },
        
        { id: '2', title: "II. The Nature of Light", type: 'section' },
        { id: '3.0', title: "3. Electromagnetic Radiation", type: 'chapter', section: '2' }
    ];

    const [activeSection, setActiveSection] = useState('1');
    const [activeChapter, setActiveChapter] = useState('1.0'); 
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