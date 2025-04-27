import blogPosts from '../assets/data/blogPosts';
import projects from '../assets/data/projects';

// 미래에 실제 API 연동 시 이 부분만 수정하면 됨
const API_ENDPOINT = process.env.NODE_ENV === 'production'
    ? 'https://api.yourdomain.com'
    : '';

// 프로젝트 관련 API 함수
export const fetchProjects = async () => {
    // 개발 환경이거나 API가 준비되지 않았을 때는 더미 데이터 사용
    if (!API_ENDPOINT) {
        // 서버 응답 시뮬레이션
        return new Promise(resolve => {
            setTimeout(() => resolve(projects), 300);
        });
    }

    // 실제 API 호출 (백엔드 연동 시 사용)
    const response = await fetch(`${API_ENDPOINT}/api/projects`);
    if (!response.ok) {
        throw new Error('프로젝트를 불러오는데 실패했습니다.');
    }
    return response.json();
};

export const fetchProjectById = async (projectId) => {
    if (!API_ENDPOINT) {
        return new Promise(resolve => {
            const project = projects.find(p => p.id === projectId);
            setTimeout(() => resolve(project), 300);
        });
    }

    const response = await fetch(`${API_ENDPOINT}/api/projects/${projectId}`);
    if (!response.ok) {
        throw new Error('프로젝트를 불러오는데 실패했습니다.');
    }
    return response.json();
};

// 블로그 관련 API 함수
export const fetchBlogPosts = async () => {
    if (!API_ENDPOINT) {
        return new Promise(resolve => {
            setTimeout(() => resolve(blogPosts), 300);
        });
    }

    const response = await fetch(`${API_ENDPOINT}/api/blog-posts`);
    if (!response.ok) {
        throw new Error('블로그 포스트를 불러오는데 실패했습니다.');
    }
    return response.json();
};

export const fetchBlogPostById = async (postId) => {
    if (!API_ENDPOINT) {
        return new Promise(resolve => {
            const post = blogPosts.find(p => p.id === postId);
            setTimeout(() => resolve(post), 300);
        });
    }

    const response = await fetch(`${API_ENDPOINT}/api/blog-posts/${postId}`);
    if (!response.ok) {
        throw new Error('블로그 포스트를 불러오는데 실패했습니다.');
    }
    return response.json();
};