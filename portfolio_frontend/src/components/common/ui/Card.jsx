import React from 'react';

const Card = ({
                  children,
                  className = '',
                  hoverable = false,
                  padding = true,
                  ...props
              }) => {
    return (
        <div
            className={`
        bg-white dark:bg-background-dark2 
        rounded-lg shadow-md 
        ${padding ? 'p-6' : ''} 
        ${hoverable ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;