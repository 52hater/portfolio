import React from 'react';

const ProjectFilter = ({ activeFilter, onFilterChange }) => {
    const filters = [
        { id: 'all', label: '모두 보기' },
        { id: 'web', label: '웹' },
        { id: 'mobile', label: '모바일' },
        { id: 'backend', label: '백엔드' },
    ];

    return (
        <div className="flex flex-wrap gap-2 mb-6">
            {filters.map(filter => (
                <button
                    key={filter.id}
                    className={`
            px-4 py-2 rounded-md text-sm font-medium transition-colors
            ${activeFilter === filter.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'}
          `}
                    onClick={() => onFilterChange(filter.id)}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
};

export default ProjectFilter;