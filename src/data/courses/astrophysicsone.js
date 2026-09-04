import ChapterOne from '../../pages/Articles/AstrophysicsOne/ChapterOne';
import ChapterTwo from '../../pages/Articles/AstrophysicsOne/ChapterTwo';

export const astrophysicsoneReadData = {
    table: [
        { id: '0', title: "Preface", type: 'section', page: 'I' },
        { id: '1', title: "I. The Tools Of Astronomy", type: 'section', page: 'II' },
        { id: '1.0', title: "1. The Celestial Sphere", type: 'chapter', section: '1', page: 'III' },
        { id: '1.1', title: "1.1 Altitude Azimuth", type: 'topic', chapter: '1.0', page: '1' },
        { id: '1.3', title: "1.2 Right Ascension And Declination", type: 'topic', chapter: '1.0', page: '2' },
        { id: '1.4', title: "1.3 The Celestial Sphere", type: 'topic', chapter: '1.0', page: '3' },
        { id: '1.5', title: "1.4 Order Of The Planets", type: 'topic', chapter: '1.0', page: '4' },
        { id: '1.6', title: "1.5 Synodic And Sidereal Periods", type: 'topic', chapter: '1.0', page: '5' },
        { id: '1.7', title: "1.6 Precession", type: 'topic', chapter: '1.0', page: '6' },
        { id: '1.8', title: "1.7 Measurements Of Time", type: 'topic', chapter: '1.0', page: '7' },
        { id: '1.9', title: "1.8 Proper Motion", type: 'topic', chapter: '1.0', page: '8' },
        { id: '1.10', title: "1.9 Spherical Trigonometry", type: 'topic', chapter: '1.0', page: '9' },
        { id: '2.0', title: "2. Orbital Mechanics", type: 'chapter', section: '1', page: '10' },
    ],
    chapters: {
        '1.0': ChapterOne,
        '2.0': ChapterTwo,
    }
};