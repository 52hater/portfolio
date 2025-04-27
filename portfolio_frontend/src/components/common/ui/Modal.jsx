import React, { useEffect, useState } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';

const Modal = ({
                   isOpen,
                   onClose,
                   title,
                   children,
                   maxWidth = '2xl' // sm, md, lg, xl, 2xl, full
               }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { width } = useWindowSize();
    const isMobile = width < 768; // 48rem = 768px

    useEffect(() => {
        // 모달이 열리면 애니메이션을 위해 약간의 지연을 둠
        if (isOpen) {
            setIsVisible(true);
            // 배경 스크롤 방지
            document.body.style.overflow = 'hidden';
        } else {
            setIsVisible(false);
            // 배경 스크롤 복원
            document.body.style.overflow = 'auto';
        }

        // 컴포넌트 언마운트 시 스크롤 복원
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // 최대 너비 클래스 매핑
    const maxWidthClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        full: 'max-w-full'
    };

    // 모달 닫기 핸들러 (배경 클릭)
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // 모달 닫기 핸들러 (ESC 키)
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    return (
        <div
            className={`
        fixed inset-0 z-50 flex items-center justify-center p-4
        bg-black bg-opacity-50 backdrop-blur-sm transition-opacity
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
            onClick={handleBackdropClick}
        >
            <div
                className={`
          bg-white dark:bg-background-dark2 rounded-lg shadow-xl 
          w-full ${maxWidthClasses[maxWidth]} 
          max-h-[90vh] overflow-auto
          transform transition-all 
          ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
          ${isMobile ? 'p-4' : 'p-6'}
        `}
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white m-0">
                        {title}
                    </h3>
                    <button
                        type="button"
                        className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
                        onClick={onClose}
                    >
                        <span className="sr-only">닫기</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;