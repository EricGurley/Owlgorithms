import React, { useState } from 'react';
import TocItem from '../components/TocItem';

const Read = () => {

    const astrophysicsSyllabus = [
    {
        id: 'part-1',
        title: 'I. The Tools Of Astronomy',
        children: [
        {
            id: 'chap-1',
            title: '1. The Celestial Sphere',
            children: [
            { id: '1.1', title: '1.1 The Greek Tradition', link: '#greek-tradition' },
            { id: '1.2', title: '1.2 The Copernican Revolution', link: '#copernican' },
            { id: '1.3', title: '1.3 Positions on the Celestial Sphere', link: '#positions' },
            { id: '1.4', title: '1.4 Physics and Astronomy', link: '#physics' },
            ]
        },
        {
            id: 'chap-2',
            title: '2. Orbital Mechanics', 
            children: [
            { id: '2.1', title: '2.1 Elliptical Orbits', link: '#orbits' }
            ]
        }
        ]
    }
    ];

    const [contentsOpen, setContentsOpen] = useState(true);
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
                        <TocItem key={section.id} item={section} />
                    ))}
                </div>
            </div>

            <div className="reading-content">
                <h1>The Cosmos Awaits</h1>
            </div>
        </div>
    );
}

export default Read;