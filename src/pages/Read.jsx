import React, { useState } from 'react';
import ChapterOne from './Articles/ChapterOne';
import ChapterTwo from './Articles/ChapterTwo';

import PageNav from '../components/PageNav';
import TocItem from '../components/TocItem';

const Read = () => {

    const [contentsOpen, setContentsOpen] = useState(true);
    const [activeChapter, setActiveChapter] = useState('chapter-1');

    const astrophysicsSyllabus = [
        {
            id: 'preface',
            title: 'Preface'
        },
        {
        id: 'part-1',
        title: 'I. The Tools Of Astronomy',
        children: [
        {
            id: 'chapter-1',
            title: '1. The Celestial Sphere',
            children: [
            { id: '1.1', title: '1.1 The Altitude-Azimuth Coordinate System', link: 'altitude-azimuth' },
            { id: '1.2', title: '1.2 The Equitorial Coordinate System', link: '#equitorial' },
            { id: '1.3', title: '1.3 Right Ascension And Declination', link: '#right-ascension' },
            { id: '1.4', title: '1.4 The Celestial Sphere', link: '#celestial-sphere' },
            
            { id: '1.5', title: '1.5 Order Of The Planets', link: '#order-of-planets' },
            { id: '1.6', title: '1.6 Synodic And Sidereal Periods', link: '#periods' },
            { id: '1.7', title: '1.7 Precession', link: '#precession' },

            { id: '1.8', title: '1.8 Measurements Of Time', link: '#measuring-time' },
            { id: '1.9', title: '1.9 Proper Motion', link: '#proper-motion' },
            { id: '1.10', title: '1.10 Spherical Trigonometry', link: '#trig' },
            ]
        },
        {
            id: 'chapter-2',
            title: '2. Orbital Mechanics', 
            children: [
            { id: '2.1', title: '2.1 Keplers Laws', link: '#keplers-laws' }
            ]
        }
        ]
    }
    ];

    const renderChapter = () => {
        switch(activeChapter) {
            case 'part-1':
            case 'chapter-1': 
            case '1.1':
            case '1.2':
            case '1.3':
            case '1.4':
                return <ChapterOne activeTopic={activeChapter}/>;
                
            case 'chapter-2': 
            case '2.1':
                return <ChapterTwo activeTopic={activeChapter} />;
                
            default: 
                return <ChapterOne activeTopic={activeChapter} />;
        }
    };

    return (
        <div className = "read-container">
            <div className={`table-of-contents ${contentsOpen ? 'open' : 'closed'}`}>
                
                <button 
                    className="contents-toggle" 
                    onClick={() => setContentsOpen(!contentsOpen)}
                >
                    {contentsOpen ? '◀' : '▶'}
                </button>

                <h2>Contents</h2>
                
                <div className="toc-tree-container">
                    {astrophysicsSyllabus.map((section) => (
                        <TocItem
                            key={section.id}
                            item={section}
                            setActiveChapter={setActiveChapter}
                            />
                    ))}
                </div>
            </div>

            <div className="read-and-nav">
                <div className="reading-content">
                    {renderChapter()}
                </div>

                <PageNav />
            </div>
        </div>
    );
}

export default Read;