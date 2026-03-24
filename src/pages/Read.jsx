import React, { useState } from 'react';
import TocItem from '../components/TocItem';
import ChapterOne from './Articles/ChapterOne';
import ChapterTwo from './Articles/ChapterTwo';

const Read = () => {

    const [contentsOpen, setContentsOpen] = useState(true);
    const [activeChapter, setActiveChapter] = useState('chapter-1');

    const astrophysicsSyllabus = [
    {
        id: 'part-1',
        title: 'I. The Tools Of Astronomy',
        children: [
        {
            id: 'chapter-1',
            title: '1. The Celestial Sphere',
            children: [
            { id: '1.1', title: '1.1 The Greek Tradition', link: '#greek-tradition' },
            { id: '1.2', title: '1.2 The Copernican Revolution', link: '#copernican' },
            { id: '1.3', title: '1.3 Positions on the Celestial Sphere', link: '#positions' },
            { id: '1.4', title: '1.4 Physics and Astronomy', link: '#physics' },
            ]
        },
        {
            id: 'chapter-2',
            title: '2. Orbital Mechanics', 
            children: [
            { id: '2.1', title: '2.1 Elliptical Orbits', link: '#orbits' }
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

            <div className="reading-content">       
                {renderChapter()} 
            </div>
        </div>
    );
}

export default Read;