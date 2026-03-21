import React from 'react';

const ValidatedInput = ({ type, placeholder, value, onChange, error, onBlur, ...props }) => {
    return (
        <div className="register-input" style={{ position: 'relative', marginBottom: '20px' }}>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                required
                {...props}
            />
            
            {error && (
                <div className="live-error-popup">
                    {error}
                </div>
            )}
        </div>
    );
};

export default ValidatedInput;