import React from 'react';

const Divider = ({ className = '', text, ...props }) => {
    if (text) {
        return (
            <div className={`flex items-center my-4 ${className}`} {...props}>
                <div className="flex-grow h-px bg-gray-200 dark:bg-gray-700"></div>
                <span className="px-3 text-sm text-gray-500 dark:text-gray-400">{text}</span>
                <div className="flex-grow h-px bg-gray-200 dark:bg-gray-700"></div>
            </div>
        );
    }

    return (
        <hr className={`my-4 border-gray-200 dark:border-gray-700 ${className}`} {...props} />
    );
};

export default Divider;