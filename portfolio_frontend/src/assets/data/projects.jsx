// 임시 이미지 경로 (실제로는 적절한 이미지로 교체 필요)
import projectImage1 from '../images/backgrounds/1234.jpg';

const projects = [
    {
        id: 'project1',
        title: 'My-Farm',
        description: '마이팜프로젝트',
        thumbnail: projectImage1,
        technologies: ['Pytorch', 'Numpy', 'matplotlib', 'OpenCV'],
        demoUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/portfolio'
    },
    {
        id: 'project2',
        title: 'Portfolio',
        description: '지금 하고있는 포트폴리오 이거 설명',
        thumbnail: projectImage1,
        technologies: ['React', 'SpringBoot', 'MySQL', 'JavaScript', 'TailwindCSS'],
        demoUrl: 'https://example.com/todo',
        githubUrl: 'https://github.com/yourusername/todo-app'
    },
    {
        id: 'project3',
        title: 'ESP32 프로젝트',
        description: '이거는 나중에 새로 산 모듈들까지 해서 프로젝트로 완성시키고 정리',
        thumbnail: projectImage1,
        technologies: ['ESP-IDF'],
        demoUrl: 'https://example.com/weather',
        githubUrl: 'https://github.com/yourusername/weather-app'
    },
    {
        id: 'project4',
        title: 'STM32 프로젝트',
        description: '이거는 일단 그냥 올려는 놓자...',
        thumbnail: projectImage1,
        technologies: ['STM32CubeIDE', 'MXCube'],
        demoUrl: 'https://example.com/board',
        githubUrl: 'https://github.com/yourusername/board-service'
    },
    {
        id: 'project5',
        title: '피어나다',
        description: '하나라도 더 있으면 좋지',
        thumbnail: projectImage1,
        technologies: ['Figma'],
        demoUrl: 'https://example.com/board',
        githubUrl: 'https://github.com/yourusername/board-service'
    }
];

export default projects;