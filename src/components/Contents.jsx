import React, { useState } from 'react';

const Contents = ({ table, activeSection, setActiveSection, activeChapter, setActiveChapter, activeTopic, setActiveTopic }) => {

    return (
        <div className="contents-container">
            <h1>Contents</h1>
            {table
                .filter(item => item.type === 'section')
                .map(section => (
                    <div key={section.id} className="section-block">
                        
                        <h2 
                            onClick={() => setActiveSection(section.id)}
                            className={activeSection === section.id ? 'toc-section active' : 'toc-section'}
                        >
                            {section.title}
                        </h2>

                        {activeSection === section.id && (
                            <div className="chapter-list">
                                {table
                                    .filter(item => item.type === 'chapter' && item.section === section.id)
                                    .map(chapter => (
                                        <div key={chapter.id} className="chapter-block">
                                            
                                            <h3 
                                                onClick={() => setActiveChapter(chapter.id)}
                                                className={activeChapter === chapter.id ? 'toc-chapter active' : 'toc-chapter'}
                                            >
                                                {chapter.title}
                                            </h3>

                                            {activeChapter === chapter.id && (
                                                <div className="topic-list">
                                                    {table
                                                        .filter(item => item.type === 'topic' && item.chapter === chapter.id)
                                                        .map(topic => (
                                                            <p 
                                                                key={topic.id} 
                                                                onClick={() => setActiveTopic(topic.id)}
                                                                className={activeTopic === topic.id ? 'toc-topic active' : 'toc-topic'}
                                                            >
                                                                {topic.title}
                                                            </p>
                                                        ))
                                                    }
                                                </div>
                                            )}
                                        </div>
                                    ))
                                }
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
    );
}

export default Contents;