/**
 * DYNAMIC PROBLEM GENERATION BLUEPRINTS
 * 
 * Contains algorithmic question generators grouped by topic slug.
 * Instead of static questions, each entry provides a `generate()` closure that procedurally 
 * instantiates randomized values, calculates expected numerical answers, and constructs 
 * step-by-step solution derivations at runtime.
 */

export const practiceProblems = {
    'celestial-sphere': [
        {
            id: 'cs-q1',
            type: 'multiple-choice',
            generate: () => {
                return {
                    prompt: "What part of the celestial sphere model does this ring highlight?",
                    image: "/Images/Practice/Astrophysics/CelestialSphere/CSCelEq.png",
                    options: [
                        "The Earth's Equator",
                        "The Celestial Equator",
                        "The Astronomical Equator",
                        "The Exterior Equator"
                    ],
                    correctAnswer: "The Celestial Equator",
                    solution: "The ring projected out into space aligned with Earth's equator represents the Celestial Equator."
                };
            }
        },
        {
            id: 'cs-q2',
            type: 'multiple-choice',
            generate: () => {
                return {
                    prompt: "What part of the celestial sphere model does this ring highlight?",
                    image: "/Images/Practice/Astrophysics/CelestialSphere/CSEarthEq.png",
                    options: [
                        "The Significant Equator",
                        "The Celestial Equator",
                        "The Earth's Equator",
                        "The Interior Equator"
                    ],
                    correctAnswer: "The Earth's Equator",
                    solution: "The ring projected out onto the inner sphere's equator represents the Earth's Equator."
                };
            }
        },
        {
            id: 'cs-q3',
            type: 'multiple-choice',
            generate: () => {
                return {
                    prompt: "What part of the celestial sphere model does this line highlight?",
                    image: "/Images/Practice/Astrophysics/CelestialSphere/CSNorthPole.png",
                    options: [
                        "The Upper Significant Line",
                        "The Preceder",
                        "The North Celestial Pole",
                        "The Interior Equator"
                    ],
                    correctAnswer: "The North Celestial Pole",
                    solution: "This line extending from the top of the Earth out into the celestial sphere represents the North Celestial Pole."
                };
            }
        },
        {
            id: 'cs-q4',
            type: 'multiple-choice',
            generate: () => {
                return {
                    prompt: "What part of the celestial sphere model does this line highlight?",
                    image: "/Images/Practice/Astrophysics/CelestialSphere/CSSouthPole.png",
                    options: [
                        "The Significant Equator",
                        "The Lower Significant Line",
                        "The South Celestial Pole",
                        "The Proceeder"
                    ],
                    correctAnswer: "The South Celestial Pole",
                    solution: "This line extending from the top of the Earth out into the celestial sphere represents the South Celestial Pole."
                };
            }
        },
        {
            id: 'cs-q5',
            type: 'multiple-choice',
            generate: () => {
                return {
                    prompt: "How much space does this arrow represent?",
                    image: "/Images/Practice/Astrophysics/CelestialSphere/CSSpace.png",
                    options: [
                        "Twice the Earth's radius",
                        "Infinity",
                        "The Solar System",
                        "Three times the Earth's radius"
                    ],
                    correctAnswer: "Infinity",
                    solution: "This space in the celestial sphere is infinitely large."
                };
            }
        }
    ],
    'order-of-planets': [
        {
            id: 'cs-q1',
            type: 'multiple-choice',
            generate: () => {
                return {
                    prompt: "If the center circle is the Sun, and the smaller white circle below it is the Earth, what is the position of the pink circle representing a celestial object considered to be?",
                    image: "/Images/Practice/Astrophysics/OrderOfThePlanets/OOTPConjunction.png",
                    options: [
                        "Quadrature",
                        "Superior Opposition",
                        "Conjunction",
                        "Southern Elongation"
                    ],
                    correctAnswer: "Conjunction",
                    solution: "The pink celestial object is considered to be in a position of conjunction."
                };
            }
        },
        {
            id: 'cs-q2',
            type: 'multiple-choice',
            generate: () => {
                return {
                    prompt: "If the center circle is the Sun, and the smaller white circle below it is the Earth, what is the position of the pink circle representing a celestial object considered to be?",
                    image: "/Images/Practice/Astrophysics/OrderOfThePlanets/OOTPOpposition.png",
                    options: [
                        "Quadrature",
                        "Inferior Opposition",
                        "Opposition",
                        "Northern Elongation"
                    ],
                    correctAnswer: "Opposition",
                    solution: "The pink celestial object is considered to be in a position of opposition."
                };
            }
        },
        {
            id: 'cs-q3',
            type: 'multiple-choice',
            generate: () => {
                return {
                    prompt: "If the center circle is the Sun, and the smaller white circle below it is the Earth, what is the position of the pink circle representing a celestial object considered to be?",
                    image: "/Images/Practice/Astrophysics/OrderOfThePlanets/OOTPEastQuad.png",
                    options: [
                        "Eastern Quadrature",
                        "Western Opposition",
                        "Left Conjunction",
                        "Western Superior"
                    ],
                    correctAnswer: "Eastern Quadrature",
                    solution: "The pink celestial object forms a 90 degree angle between itself, the Earth, and the Sun. But the reason this is East and not West is because when viewing the celestial object from on Earth, the object would appear to be to your right (East)."
                };
            }
        },
        {
            id: 'cs-q4',
            type: 'multiple-choice',
            generate: () => {
                return {
                    prompt: "If the center circle is the Sun, and the smaller white circle below it is the Earth, what is the position of the pink circle representing a celestial object considered to be?",
                    image: "/Images/Practice/Astrophysics/OrderOfThePlanets/OOTPWestQuad.png",
                    options: [
                        "Western Quadrature",
                        "Eastern Opposition",
                        "Right Conjunction",
                        "Eastern Superior"
                    ],
                    correctAnswer: "Western Quadrature",
                    solution: "The pink celestial object forms a 90 degree angle between itself, the Earth, and the Sun. But the reason this is East and not West is because when viewing the celestial object from on Earth, the object would appear to be to your left (West)."
                };
            }
        }
    ],
    'right-ascension': [
        {
            id: 'ra-q1',
            type: 'numerical',
            generate: () => {
                const x = Math.floor(Math.random() * 10) + 1; 
                const y = Math.floor(Math.random() * 10) + 1;
                const z = Math.floor(Math.random() * 5) + 1;
                const expectedAnswer = x + y - z;
                return {
                    prompt: `Calculate the result: ${x} + ${y} - ${z} = ?`,
                    correctAnswer: expectedAnswer,
                    solution: `Step 1: Add the first two values: ${x} + ${y} = ${x+y}. \nStep 2: Subtract the third value: ${x+y} - ${z}. \nFinal Answer: ${expectedAnswer}`
                };
            }
        },
        {
            id: 'ra-q2',
            type: 'numerical',
            generate: () => {
                const x = Math.floor(Math.random() * 20) + 10; 
                const y = Math.floor(Math.random() * 10) + 5;  
                const expectedAnswer = x + y;
                return {
                    prompt: `Calculate the sum: ${x} + ${y} = ?`,
                    correctAnswer: expectedAnswer,
                    solution: `Step 1: Add the values together: ${x} + ${y}. \nFinal Answer: ${expectedAnswer}`
                };
            }
        }
    ]
};