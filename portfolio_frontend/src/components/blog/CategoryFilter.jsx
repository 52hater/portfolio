import React from 'react';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
    return (
        <div className="flex flex-wrap gap-2 mb-6">
            <button
                className={`
          px-4 py-2 rounded-md text-sm font-medium transition-colors
          ${activeCategory === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'}
        `}
                onClick={() => onCategoryChange('all')}
            >
                전체보기
            </button>

            {categories.map(category => (
                <button
                    key={category}
                    className={`
            px-4 py-2 rounded-md text-sm font-medium transition-colors
            ${activeCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'}
          `}
                    onClick={() => onCategoryChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;