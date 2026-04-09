import React from 'react';

const PageNav = ({ table, activeTopic, setActiveTopic, setActiveChapter, setActiveSection }) => {
    const readingSequence = table; 

    const currentIndex = readingSequence.findIndex(item => item.id === activeTopic);

    const prevPage = currentIndex > 0 ? readingSequence[currentIndex - 1] : null;
    const nextPage = currentIndex < readingSequence.length - 1 ? readingSequence[currentIndex + 1] : null;

    const navigateTo = (targetPage) => {
        if (!targetPage) return;

        setActiveTopic(targetPage.id); 

        if (targetPage.type === 'topic') {
            setActiveChapter(targetPage.chapter);
        } else if (targetPage.type === 'chapter') {
            setActiveChapter(targetPage.id);
            setActiveSection(targetPage.section); 
        } else if (targetPage.type === 'section') {
            setActiveSection(targetPage.id); 
        }
    };

    return (
        <div className="page-nav-container">
            
            <div>
                {prevPage && (
                    <button onClick={() => navigateTo(prevPage)}>
                        ← 
                    </button>
                )}
            </div>

            <div>
                {nextPage && (
                    <button onClick={() => navigateTo(nextPage)}>
                        →
                    </button>
                )}
            </div>

        </div>
    );
};

export default PageNav;