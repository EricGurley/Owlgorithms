import React from 'react';

export default function Read() {
    return (
        <div className = "read-container">
            <aside className = "table-of-contents">
                <h2> Contents </h2>
                <nav>
                    <ul>
                        <li><a href = "chapter-1"> 1. The Celestial Sphere </a></li>
                        <li><a href = "chapter-2"> 2. Orbital Mechanics </a></li>
                        <li><a href = "chapter-3"> 3. The Spectrum Of Light </a></li>
                        <li><a href = "chapter-4"> 4. Special Relativity </a></li>
                        <li><a href = "chapter-5"> 5. Light And Matter </a></li>
                        <li><a href = "chapter-6"> 6. Telescopes </a></li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
}