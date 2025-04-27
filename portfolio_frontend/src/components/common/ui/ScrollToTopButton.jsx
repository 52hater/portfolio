import React, { useState, useEffect } from 'react';

/**
 * ScrollToTopButton 컴포넌트
 * 스크롤이 조금이라도 내려갔을 때 화면 오른쪽 하단에 나타나는 최상단 이동 버튼
 *
 * 기능:
 * - 스크롤 위치 감지하여 버튼 표시/숨김
 * - 클릭 시 부드럽게 최상단으로 스크롤
 * - 다크모드에서는 흰색 화살표, 라이트모드에서는 검은색 화살표 표시
 * 이게, util에 scrollToTop.jsx와는 다른느낌의 친구임.
 * 일단 utils 디렉토리의 목적부터 이해해야하는데, 거기는 유틸리티 함수나 헬퍼 함수들을 모아놓는 곳임.
 * UI컴포넌트를 넣는 곳이 아님.
 * 잘봐.
 * ScrollToTop과 ScrollToTopButton의 차이 :
 * ScrollToTop >> 라우팅 관련 로직 (UI없음)
 * ScrollToTopButton >> UI 컴포넌트(버튼 렌더링)
 * --> 단일 책임 원칙 : 한 파일에서 두 가지 다른 책임을 가진 컴포넌트를 관리하는 것은 옳지 않음.
 * 따라서 버튼인(UI인) ScrollToTopButton.jsx 는 ui버튼 컴포넌트로 만든 것.
 * 단순히 공통로직이라고 재사용하겠다고 때려박는것보다
 * 정확한 소속을 나눠주는 것이 바람직함.
 * 그리고 당연히 컴포넌트를 만들었지만, 실제로 화면에 나타나게 하려면
 * App.jsx에 컴포넌트를 추가해야함.
 * 해당 컴포넌트를 App.jsx에 import하고 렌더링을 해야 버튼이 보임.
 * 그리고 App.jsx에 추가했기 때문에 모든 라우팅 페이지에서 다 적용이 됨.
 */
const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // 스크롤 위치에 따라 버튼 표시 여부 결정
    useEffect(() => {
        const toggleVisibility = () => {
            // 스크롤이 조금이라도 내려갔을 때 버튼 표시
            if (window.scrollY > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', toggleVisibility);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // 최상단으로 부드럽게 스크롤하는 함수
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 bg-primary hover:bg-primary-dark dark:bg-gray-800 dark:hover:bg-gray-700 text-white dark:text-white rounded-full shadow-lg transition-all duration-300 opacity-90 hover:opacity-100 transform hover:scale-110"
                    aria-label="맨 위로 이동"
                >
                    {/* 위쪽 화살표 SVG 아이콘 */}
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;