import React from 'react';

const Button = ({
                    children,
                    variant = 'primary',
                    size = 'md',
                    onClick,
                    className = '',
                    type = 'button',
                    disabled = false,
                    fullWidth = false,
                    ...props
                }) => {
    const baseClasses = "font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = {
        primary: "bg-primary hover:bg-primary-dark text-white focus:ring-primary-light",
        secondary: "bg-secondary hover:bg-secondary-dark text-white focus:ring-secondary-light",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary-light",
        ghost: "text-primary hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-primary-light",
        link: "text-primary hover:underline p-0 focus:ring-0",
    };

    const sizeClasses = {
        sm: "text-xs px-3 py-1.5",
        md: "text-sm px-4 py-2",
        lg: "text-base px-6 py-3",
    };

    const disabledClasses = disabled
        ? "opacity-50 cursor-not-allowed pointer-events-none"
        : "";

    const widthClass = fullWidth ? "w-full" : "";

    return (
        <button
            type={type}
            className={`
        ${baseClasses}
        ${variantClasses[variant] || variantClasses.primary}
        ${sizeClasses[size] || sizeClasses.md}
        ${disabledClasses}
        ${widthClass}
        ${className}
      `}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;