import React from 'react';
import { Link } from 'react-router-dom';

const ChapterOne = ({activeTopic}) => {

    const renderTopic = () => {
        switch(activeTopic) {
            case 'preface':
            default:
                return (
                    <h1>Welcome To Astrophysics!!!</h1>
                );
            case 'chapter-1':
            case '1.1':
                return (
                    <h1>The Altitude-Azimuth Coordinate System</h1>
                );
            case '1.2':
                return (
                    <h1>The Equitorial Coordinate System</h1>
                );
            case '1.3':
                return (
                    <h1>Right Ascension And Declination</h1>
                );
            case '1.4':
                return (
                    <h1>The Celestial Sphere</h1>
                );
            case '1.5':
                return (
                    <h1>Order Of The Planets</h1>
                );
            case '1.6':
                return (
                    <h1>Synodic And Sidereal Periods</h1>
                );
            case '1.7':
                return (
                    <h1>Precession</h1>
                );
            case '1.8':
                return (
                    <h1>Measurements Of Time</h1>
                );
            case '1.9':
                return (
                    <h1>Proper Motion</h1>
                );
            case '1.10':
                return (
                    <h1>Spherical Trigonometry</h1>
                );
        }
    }

    return (
        <div className = "chapter-one">
            {renderTopic()}
        </div>
    );
}

export default ChapterOne;