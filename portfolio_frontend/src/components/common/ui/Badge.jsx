import React from 'react';

const Badge = ({ children, color = 'primary', className = '' }) => {
    const colorClasses = {
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-black font-bold',
        success: 'bg-green-500 text-white',
        warning: 'bg-yellow-500 text-white',
        danger: 'bg-red-500 text-white',
        info: 'bg-blue-500 text-white',
    };

    return (
        <span
            className={`
        ${colorClasses[color] || colorClasses.primary}
        text-xs font-medium px-2 py-1 rounded-md mr-2 mb-2 inline-block
        ${className}
      `}
        >
      {children}
    </span>
    );
};

export default Badge;