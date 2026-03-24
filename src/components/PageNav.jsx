import React from 'react';

const PageNav = ({ currentPage, onNext, onPrev, hasNext, hasPrev }) => {
    return (
        <div className="page-nav-container">
            <div className="page-nav-content">
                
                <span 
                    className={`nav-arrow ${hasPrev ? 'active' : 'disabled'}`}
                    onClick={hasPrev ? onPrev : undefined}
                >
                    ◀
                </span>
                
                <span className="nav-text">
                    {currentPage} of 10
                </span>
                
                <span 
                    className={`nav-arrow ${hasNext ? 'active' : 'disabled'}`}
                    onClick={hasNext ? onNext : undefined}
                >
                    ▶
                </span>
                
            </div>
        </div>
    );
}

export default PageNav;