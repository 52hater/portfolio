import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { isActivePath, scrollToSection } from '../../../utils/router';

/**
 * 네비게이션 링크 컴포넌트
 *
 * @param {Object} props
 * @param {string} props.to - 링크 경로
 * @param {string} props.sectionId - 스크롤할 섹션 ID (홈 페이지 내 섹션으로 스크롤할 경우)
 * @param {boolean} props.useRouter - 라우팅을 사용할지 여부 (false면 같은 페이지 내 스크롤)
 * @param {ReactNode} props.children - 링크 내용
 * @param {string} props.className - 추가 클래스
 * @param {function} props.onClick - 추가 클릭 핸들러
 */
const NavLink = ({
                     to,
                     sectionId,
                     useRouter = true,
                     children,
                     className = '',
                     onClick,
                     ...props
                 }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isActive = isActivePath(to, location.pathname);

    const baseClasses = 'transition-colors';
    const activeClasses = 'text-primary dark:text-primary-light font-medium';
    const inactiveClasses = 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light';

    const combinedClasses = `${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${className}`;

    const handleClick = (e) => {
        // 추가 클릭 핸들러가 있으면 실행
        if (onClick) {
            onClick(e);
        }

        // 홈페이지에서 Home 링크를 클릭한 경우에만 최상단으로 스크롤
        if (to === '/' && location.pathname === '/' && !sectionId) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        // 섹션 ID가 있고 라우팅을 사용하지 않는 경우, 해당 섹션으로 스크롤
        if (sectionId && !useRouter) {
            e.preventDefault();

            // 이미 홈페이지에 있는 경우
            if (location.pathname === '/') {
                // 해당 섹션으로 스크롤
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // 다른 페이지에서 홈페이지의 특정 섹션으로 이동
                scrollToSection(sectionId, navigate, location.pathname);
            }
        }
    };

    return (
        <Link
            to={to}
            className={combinedClasses}
            onClick={handleClick}
            {...props}
        >
            {children}
        </Link>
    );
};

export default NavLink;