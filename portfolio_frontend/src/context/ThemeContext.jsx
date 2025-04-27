import { createContext } from 'react';

// 기본값은 다크 모드
const ThemeContext = createContext({
    isDarkMode: true,
    toggleTheme: () => {}
});

export default ThemeContext;