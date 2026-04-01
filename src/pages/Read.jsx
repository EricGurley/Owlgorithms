import React, { useState } from 'react';
import ChapterOne from './Articles/ChapterOne';
import ChapterTwo from './Articles/ChapterTwo';
import PageNav from '../components/PageNav';
import Contents from '../components/Contents';

const Read = () => {

    return (
        <div className="read-container">
            
            <Contents />

            <div className='articles-and-nav-container'>

                <ChapterOne />

                <PageNav />
            </div>
        </div>
    );
}

export default Read;