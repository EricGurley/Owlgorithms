import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseReadData } from '../data/readRegistry';
import PageNav from '../components/PageNav';
import Contents from '../components/Contents';

const Read = () => {
    const { courseId, topicSlug } = useParams();

    // Pull course metadata dynamically based on route parameter
    const { table, chapters } = getCourseReadData(courseId);

    const [activeSection, setActiveSection] = useState('1');
    const [activeChapter, setActiveChapter] = useState('1.0'); 
    const [activeTopic, setActiveTopic] = useState('1.1'); 
    
    useEffect(() => {
        if (topicSlug === 'altitude-azimuth') {
            setActiveSection('1');
            setActiveChapter('1.0');
            setActiveTopic('1.1');
        } else if (topicSlug === 'right-ascension') {
            setActiveSection('1');
            setActiveChapter('1.0');
            setActiveTopic('1.3'); 
        }
    }, [topicSlug]);

    // Dynamic component lookup replaces the hardcoded switch statement
    const SelectedChapter = chapters[activeChapter] || chapters['1.0'];

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
                <SelectedChapter activeTopic={activeTopic} />

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