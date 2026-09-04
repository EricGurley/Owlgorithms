import React from 'react';

/**
 * Handles linear reading navigation across textbook topics, chapters, and sections.
 * Traverses a lookup sequence array to determine previous/next pages and synchronizes parent layout state.
 */
const PageNav = ({ table, activeTopic, setActiveTopic, setActiveChapter, setActiveSection }) => {
    const readingSequence = table; 

    // Find current page position in the flattened reading sequence
    const currentIndex = readingSequence.findIndex(item => item.id === activeTopic);
    const currentPageNumber = readingSequence[currentIndex];

    // Compute adjacency to show or hide directional controls
    const prevPage = currentIndex > 0 ? readingSequence[currentIndex - 1] : null;
    const nextPage = currentIndex < readingSequence.length - 1 ? readingSequence[currentIndex + 1] : null;

    /**
     * Updates active navigation state based on target item node type.
     * Ensures parent views open the appropriate nested accordions when jumping pages.
     */
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
            
            <div className='nav-arrow' style={{ visibility: prevPage ? 'visible' : 'hidden' }}>
                <h2 onClick={() => navigateTo(prevPage)}>
                    ◀ 
                </h2>
            </div>

            <div className='page-number'>
                <h1>Page {currentPageNumber?.page} of 11</h1>
            </div>

            <div className='nav-arrow' style={{ visibility: nextPage ? 'visible' : 'hidden' }}>
                <h2 onClick={() => navigateTo(nextPage)}>
                    ▶
                </h2>
            </div>

        </div>
    );
};

export default PageNav;