import React from 'react';
import TopicNode from '../components/TopicNode';

export default function Practice() {
    return (
        <div className = "practice-container">
            <h1> Astrophysics 101 </h1>

            <div className = "borderline"/>

            <h2> I. The Tools Of Astronomy </h2>

            <div className = "borderline"/>

            <div className = "skills-container">

                <div className = "celestial-sphere-symbol">
                    <h2> 1: The Celestial Sphere </h2>
                </div>
                
                <div className = "topic-buttons-container">
                    {/*
                    5 buttons will be called here, 2 with actual icons and 3 with a question box,
                    only because those icons haven't been drawn yet. The 2 actual icons are the only
                    topics that will work and have practice problems
                    */}

                    {/* Active Topics */}
                    <TopicNode 
                        title="Altitude-Azimuth"
                        description="Learn to navigate the sky!"
                        image="/Images/Topics/AA.png"
                        isPlaceholder={false}
                        urlSlug="altitude-azimuth"
                    />

                    <TopicNode 
                        title="Right Ascension & Declination"
                        description="Learn to navigate the sky, but better!"
                        image="/Images/Topics/EQ.png"
                        isPlaceholder={false}
                        urlSlug="right-ascension"
                    />

                    {/* Placeholder Topics */}
                    <TopicNode 
                        title="Coming Soon!"
                        description="Coming Soon!"
                        image={null} 
                        isPlaceholder={true}
                    />

                    <TopicNode 
                        title="Coming Soon!"
                        description="Coming Soon!"
                        image={null} 
                        isPlaceholder={true}
                    />

                    <TopicNode 
                        title="Coming Soon!"
                        description="Coming Soon!"
                        image={null} 
                        isPlaceholder={true}
                    />
                </div>

                {/*

                <button className = 'neon-button'>
                    Orbital Mechanics
                </button>

                <button className = 'neon-button'>
                    The Spectrum Of Light
                </button>

                <button className = 'neon-button'>
                    Special Relativity
                </button>

                <button className = 'neon-button'>
                    Light And Matter
                </button>

                <button className = 'neon-button'>
                    Telescopes
                </button>

                */}
            </div>
        </div>
    );
}