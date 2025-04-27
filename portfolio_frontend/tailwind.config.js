/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5c6bc0',
          light: '#8e99f3',
          dark: '#4954a1',
        },
        secondary: {
          DEFAULT: '#26c6da',
          light: '#6ff9ff',
          dark: '#0095a8',
        },
        background: {
          light: '#ffffff',
          dark: '#121212',
          light2: '#f5f5f5',
          dark2: '#1e1e1e',
        },
        text: {
          light: '#333333',
          dark: '#e0e0e0',
          light2: '#666666',
          dark2: '#b0b0b0',
        },
      },
      fontFamily: {
        sans: ['"Pretendard"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', '"Helvetica Neue"', '"Segoe UI"', '"Apple SD Gothic Neo"', '"Noto Sans KR"', '"Malgun Gothic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}