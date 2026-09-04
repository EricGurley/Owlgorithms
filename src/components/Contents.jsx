import React, { useState } from 'react';

/**
 * RECURSIVE TABLE OF CONTENTS (TOC) ACCORDION
 * 
 * Renders a collapsible sidebar hierarchy (Section -> Chapter -> Topic).
 * Filters a flat table array to dynamically build multi-level nested accordions,
 * managing active state triggers and expanding active modules automatically.
 */
const Contents = ({ table, activeSection, setActiveSection, activeChapter, setActiveChapter, activeTopic, setActiveTopic }) => {

    const [isOpen, setIsOpen] = useState(true);
    
    return (
        <div className={`contents-container ${isOpen ? '' : 'closed'}`}>
            {/* Sidebar collapse / expand toggle tab */}
            <div className='toc-toggle' onClick={() => setIsOpen(!isOpen)}>
                <h2>{isOpen ? '◀' : '▶'}</h2>
            </div>

            <h1> Contents </h1>

            <div className="contents-divider"/>
            
            {/* Level 1: Sections */}
            {table
                .filter(item => item.type === 'section')
                .map(section => (
                    <div key={section.id} className="section-block">
                        
                        <h2 
                            onClick={() => {
                                setActiveSection(activeSection === section.id ? null : section.id);
                                setActiveTopic(section.id); 
                            }}
                            className={activeTopic === section.id ? 'toc-section active' : 'toc-section'}
                        >
                            {section.title}
                        </h2>

                        {/* Level 2: Chapters within target Section */}
                        <div className={`accordion-wrapper ${activeSection === section.id ? 'open' : ''}`}>
                            <div className="chapter-list">
                                {table
                                    .filter(item => item.type === 'chapter' && item.section === section.id)
                                    .map(chapter => (
                                        <div key={chapter.id} className="chapter-block">
                                            
                                            <h3 
                                                onClick={() => {
                                                    setActiveChapter(activeChapter === chapter.id ? null : chapter.id);
                                                    setActiveTopic(chapter.id); 
                                                }}
                                                className={activeTopic === chapter.id ? 'toc-chapter active' : 'toc-chapter'}
                                            >
                                                {chapter.title}
                                            </h3>

                                            {/* Level 3: Topics within target Chapter */}
                                            <div className={`accordion-wrapper ${activeChapter === chapter.id ? 'open' : ''}`}>
                                                <div className="topic-list">
                                                    {table
                                                        .filter(item => item.type === 'topic' && item.chapter === chapter.id)
                                                        .map(topic => (
                                                            <h3 
                                                                key={topic.id} 
                                                                onClick={() => setActiveTopic(topic.id)}
                                                                className={activeTopic === topic.id ? 'toc-topic active' : 'toc-topic'}
                                                            >
                                                                {topic.title}
                                                            </h3>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Contents;