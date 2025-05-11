import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from './Container';
import ThemeToggle from '../ui/ThemeToggle';
import NavLink from '../ui/NavLink';
import { isActivePath } from '../../../utils/router';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // 스크롤 감지
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // 메뉴 토글
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // 모바일 메뉴가 열렸을 때 배경 스크롤 방지
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    // 홈페이지인지 확인 - 홈페이지에서는 스크롤 시에만 배경 추가
    const isHomePage = location.pathname === '/';
    const shouldShowBackground = !isHomePage || isScrolled;

    // 모바일 메뉴 닫기
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`
        fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300
        ${shouldShowBackground ? 'bg-white/70 dark:bg-background-dark/70 backdrop-blur-md shadow-md' : 'bg-transparent'}
      `}
        >
            <Container>
                <div className="flex items-center justify-between py-4">
                    {/* 로고 */}
                    <NavLink to="/" className="text-2xl font-bold text-primary dark:text-white">
                        Portfolio
                    </NavLink>

                    {/* 데스크탑 네비게이션 링크 */}
                    <div className="hidden md:flex items-center space-x-6">
                        <NavLink to="/">
                            Home
                        </NavLink>
                        <NavLink
                            to="/"
                            sectionId="projects-section"
                            useRouter={false}
                        >
                            Projects
                        </NavLink>
                        {/*<NavLink*/}
                        {/*    to="/"*/}
                        {/*    sectionId="blog-section"*/}
                        {/*    useRouter={false}*/}
                        {/*>*/}
                        {/*    Blog*/}
                        {/*</NavLink>*/}
                        <NavLink to="/resume">
                            Resume
                        </NavLink>

                        {/* 테마 토글 버튼 */}
                        <ThemeToggle />
                    </div>

                    {/* 모바일 메뉴 토글 버튼 */}
                    <div className="flex items-center md:hidden">
                        <ThemeToggle />
                        <button
                            type="button"
                            className="ml-2 p-2 text-gray-600 dark:text-gray-300 hover:text-primary"
                            onClick={toggleMenu}
                            aria-label="메뉴 열기"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Container>

            {/* 모바일 메뉴 */}
            <div
                className={`
          fixed inset-0 z-40 bg-white dark:bg-background-dark transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold text-primary dark:text-white">메뉴</h2>
                    <button
                        type="button"
                        className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary"
                        onClick={toggleMenu}
                        aria-label="메뉴 닫기"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-4">
                    <ul className="space-y-4">
                        <li>
                            <NavLink
                                to="/"
                                className={`block py-2 px-4 rounded-md ${isActivePath('/', location.pathname) ? 'bg-primary-light/10 text-primary' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                onClick={closeMenu}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                sectionId="projects-section"
                                useRouter={false}
                                className={`block py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800`}
                                onClick={closeMenu}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                sectionId="blog-section"
                                useRouter={false}
                                className={`block py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800`}
                                onClick={closeMenu}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/resume"
                                className={`block py-2 px-4 rounded-md ${isActivePath('/resume', location.pathname) ? 'bg-primary-light/10 text-primary' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                onClick={closeMenu}
                            >
                                Resume
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;