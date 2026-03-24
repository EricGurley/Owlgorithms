import React, { useState } from 'react';
import ChapterOne from './Articles/ChapterOne';
import ChapterTwo from './Articles/ChapterTwo';
import PageNav from '../components/PageNav';
import TocItem from '../components/TocItem';

const Read = () => {

    const [contentsOpen, setContentsOpen] = useState(true);
    const [activeChapter, setActiveChapter] = useState('preface');

    const handleNextPage = () => {
        const nextId = chapterData[activeChapter]?.next;
        if (nextId) setActiveChapter(nextId);
    };

    const handlePrevPage = () => {
        const prevId = chapterData[activeChapter]?.prev;
        if (prevId) setActiveChapter(prevId);
    };

    const chapterData = {
        'preface':   { page: 'I', prev: null, next: '1.1' },
        'part-1':    { page: '1', prev: 'preface', next: '1.2' },
        'chapter-1': { page: '1', prev: 'preface', next: '1.2' },
        '1.1':       { page: '1', prev: 'preface', next: '1.2' },
        '1.2':       { page: '2', prev: '1.1', next: '1.3' },
        '1.3':       { page: '3', prev: '1.2', next: '1.4' },
        '1.4':       { page: '4', prev: '1.3', next: '1.5' },
        '1.5':       { page: '5', prev: '1.4', next: '1.6' },
        '1.6':       { page: '6', prev: '1.5', next: '1.7' },
        '1.7':       { page: '7', prev: '1.6', next: '1.8' },
        '1.8':       { page: '8', prev: '1.7', next: '1.9' },
        '1.9':       { page: '9', prev: '1.8', next: '1.10' },
        '1.10':      { page: '10', prev: '1.9', next: 'chapter-2' },
        'chapter-2': { page: '11', prev: '1.10', next: '2.1' },
        '2.1':       { page: '12', prev: 'chapter-2', next: null }
    };

    const astrophysicsSyllabus = [
        {
            id: 'preface',
            title: 'Preface',
        },
        {
            id: 'part-1',
            title: 'I. The Tools Of Astronomy',
            children: [
                {
                    id: 'chapter-1',
                    title: '1. The Celestial Sphere',
                    children: [
                        { id: '1.1', title: '1.1 The Altitude-Azimuth Coordinate System' },
                        { id: '1.2', title: '1.2 The Equitorial Coordinate System' },
                        { id: '1.3', title: '1.3 Right Ascension And Declination' },
                        { id: '1.4', title: '1.4 The Celestial Sphere' },
                        { id: '1.5', title: '1.5 Order Of The Planets' },
                        { id: '1.6', title: '1.6 Synodic And Sidereal Periods' },
                        { id: '1.7', title: '1.7 Precession' },
                        { id: '1.8', title: '1.8 Measurements Of Time' },
                        { id: '1.9', title: '1.9 Proper Motion' },
                        { id: '1.10', title: '1.10 Spherical Trigonometry' },
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
            case 'preface':
            case '1.1':
            case '1.2':
            case '1.3':
            case '1.4':
            case '1.5':
            case '1.6':
            case '1.7':
            case '1.8':
            case '1.9':
            case '1.10':
                return <ChapterOne activeTopic={activeChapter}/>;
                
            case 'chapter-2': 
            case '2.1':
                return <ChapterTwo activeTopic={activeChapter} />;
                
            default: 
                return <ChapterOne activeTopic={activeChapter} />;
        }
    };

    return (
        <div className="read-container">
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

                <PageNav 
                    currentPage={chapterData[activeChapter]?.page || '?'} 
                    onNext={handleNextPage}
                    onPrev={handlePrevPage}
                    hasNext={!!chapterData[activeChapter]?.next}
                    hasPrev={!!chapterData[activeChapter]?.prev}
                />
            </div>
        </div>
    );
}

export default Read;