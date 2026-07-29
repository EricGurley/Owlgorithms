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
                    <TopicNode 
                        title="The Celestial Sphere"
                        description="Change how you view the globe!"
                        image="/Images/Topics/AA.png"
                        isPlaceholder={false}
                        urlSlug="celestial-sphere"
                        difficulty={1}
                    />

                    <TopicNode 
                        title="Order Of The Planets"
                        description="Learn celestial positions!"
                        image="/Images/Topics/AA.png"
                        isPlaceholder={false}
                        urlSlug="order-of-planets"
                        difficulty={1}
                    />

                    <TopicNode 
                        title="Right Ascension & Declination"
                        description="Learn to navigate the sky!"
                        image="/Images/Topics/EQ.png"
                        isPlaceholder={false}
                        urlSlug="right-ascension"
                        difficulty={3}
                    />

                    {/* Placeholder Topics */}
                    <TopicNode 
                        title="Coming Soon!"
                        description="Coming Soon!"
                        image={null} 
                        isPlaceholder={true}
                        difficulty={0}
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