import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import BlogPage from '../pages/BlogPage';
import BlogPostPage from '../pages/BlogPostPage';
import ResumePage from '../pages/ResumePage';

/**
 * 현재 경로가 지정된 경로와 일치하는지 확인하는 함수
 * @param {string} path - 확인할 경로
 * @param {string} currentPath - 현재 경로
 * @returns {boolean} - 경로 일치 여부
 */
export const isActivePath = (path, currentPath) => {
    if (path === '/' && currentPath !== '/') {
        return false;
    }
    return currentPath.startsWith(path);
};

/**
 * 스크롤을 특정 위치나 요소로 이동시키는 함수
 * @param {Object} options - 스크롤 옵션
 * @param {number} options.top - 상단으로부터의 위치 (픽셀)
 * @param {string} options.elementId - 스크롤할 요소 ID
 * @param {string} options.behavior - 스크롤 동작 ('smooth' 또는 'instant')
 */
export const scrollTo = (options = {}) => {
    const { top = 0, elementId, behavior = 'smooth' } = options;

    if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            // 요소의 위치로 스크롤하되, 헤더 높이 등을 고려해 여유 공간 부여
            const headerOffset = 120; // 헤더 높이 + 여유 공간
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior
            });
            return;
        }
    }

    window.scrollTo({ top, behavior });
};

/**
 * 홈 페이지에서 특정 섹션으로 스크롤하는 함수
 * @param {string} sectionId - 섹션 ID
 * @param {function} navigate - react-router의 navigate 함수
 * @param {string} currentPath - 현재 경로
 */
export const scrollToSection = (sectionId, navigate, currentPath) => {
    if (currentPath !== '/') {
        // 홈 페이지가 아니면 홈으로 이동 후 스크롤
        navigate('/');
        // 페이지 전환 후 DOM이 렌더링될 시간을 주기 위해 약간의 지연 추가
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                // 요소의 위치로 스크롤하되, 헤더 높이 등을 고려해 여유 공간 부여

                // 블로그 섹션을 너무 아래로 잡아서 블로그 섹션일경우 더 작은 오프셋 적용 (크게하니까 내려가더라고)
                const headerOffset = sectionId === 'blog-section' ? -400 : -10;

                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    } else {
        // 이미 홈 페이지에 있으면 바로 스크롤
        scrollTo({ elementId: sectionId });
    }
};

/**
 * 앱의 모든 라우트를 정의하는 컴포넌트
 */
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postId" element={<BlogPostPage />} />
            <Route path="/resume" element={<ResumePage />} />
        </Routes>
    );
};