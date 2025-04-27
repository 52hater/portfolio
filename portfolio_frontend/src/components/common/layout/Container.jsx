import React from 'react';

/**
 * 컨텐츠를 포함하는 컨테이너 컴포넌트
 *
 * @param {ReactNode} children - 자식 컴포넌트
 * @param {string} className - 추가 CSS 클래스
 * @param {string} size - 크기(width) 옵션: sm, md, lg, xl, 2xl, full
 */
const Container = ({
                       children,
                       className = '',
                       size = '2xl',
                       ...props
                   }) => {
    const sizeClasses = {
        sm: 'max-w-screen-sm',
        md: 'max-w-screen-md',
        lg: 'max-w-screen-lg',
        xl: 'max-w-screen-xl',
        '2xl': 'max-w-screen-2xl',
        full: 'max-w-full',
    };

    return (
        <div
            className={`mx-auto w-full px-4 sm:px-6 ${sizeClasses[size] || sizeClasses['2xl']} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Container;