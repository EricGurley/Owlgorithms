import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseNode = ({ title, image, onClick, isPlaceholder }) => {
    const formattedImage = image && image.startsWith('/')
        ? `${import.meta.env.BASE_URL}${image.slice(1)}`
        : image;

    return (
        <div className="topic-node-container course-node-container">
            <button 
                className={`topic-icon-btn ${isPlaceholder ? 'placeholder disabled' : 'clickable'}`}
                onClick={onClick}
            >
                {isPlaceholder ? (
                    <span className="question-mark">?</span>
                ) : (
                    formattedImage && <img src={formattedImage} alt={title} className="node-image" />
                )}
            </button>
            <h3 className="topic-title">{title}</h3>
        </div>
    );
};

export default function CourseCatalog() {
    const navigate = useNavigate();

    return (
        <div className="practice-container course-catalog-container">
            <h1> Catalog </h1>
            <div className="borderline" />

            <div className="course-catalog-grid">
                
                <div className="course-column">
                    <h2 className="course-column-title">
                        Physics
                    </h2>
                    <CourseNode 
                        title="Astrophysics I"
                        image="/Images/Topics/AA.png"
                        onClick={() => navigate('/course/astrophysics-1')}
                        isPlaceholder={false}
                    />
                    <CourseNode 
                        title="Astrophysics II"
                        image={null}
                        onClick={() => alert("Astrophysics II is coming soon!")}
                        isPlaceholder={true}
                    />
                </div>

                <div className="course-column">
                    <h2 className="course-column-title">
                        Mathematics
                    </h2>
                    <CourseNode 
                        title="Calculus 3"
                        image={null}
                        onClick={() => alert("Calculus 3 is coming soon!")}
                        isPlaceholder={true}
                    />
                    <CourseNode 
                        title="Differential Equations"
                        image={null}
                        onClick={() => alert("Differential Equations is coming soon!")}
                        isPlaceholder={true}
                    />
                </div>

                <div className="course-column">
                    <h2 className="course-column-title">
                        Engineering
                    </h2>
                    <CourseNode 
                        title="Thermodynamics"
                        image={null}
                        onClick={() => alert("Thermodynamics is coming soon!")}
                        isPlaceholder={true}
                    />
                    <CourseNode 
                        title="Fluid Mechanics"
                        image={null}
                        onClick={() => alert("Fluid Mechanics is coming soon!")}
                        isPlaceholder={true}
                    />
                </div>

            </div>
        </div>
    );
}