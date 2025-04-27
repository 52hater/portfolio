import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 페이지 라우팅 시 스크롤 위치를 제어하는 컴포넌트
 * router 에서 Router 내부에 포함하여 사용
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // 페이지 전환 시 최상단으로 스크롤
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);

    return null; // 이 컴포넌트는 UI를 렌더링하지 않음
};

export default ScrollToTop;