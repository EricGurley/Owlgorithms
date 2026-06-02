import React from 'react';

export default function QuestionCanvas({ prompt }) {
    return (
        <div style={{ marginBottom: '40px', marginTop: '20px' }}>
            <h2 style={{ fontSize: '1.8rem', lineHeight: '1.5' }}>
                {prompt}
            </h2>
        </div>
    );
}