import { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext.jsx';

export const ThemeProvider = ({ children }) => {
    // 초기상태는 다크모드
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // 사용자 시스템 설정 또는 저장된 선호도에 따라 초기 테마 설정
        // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        } else {
            // setIsDarkMode(prefersDark);
            // 기본설정 : 다크모드
            setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        // 다크 모드 상태에 따라 HTML 클래스 조정
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};