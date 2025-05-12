import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/layout/Container';
import Badge from '../common/ui/Badge';
import { fetchProjects } from '../../services/api';

/**
 * ProjectsSection 컴포넌트
 * 프로젝트 목록을 표시하는 섹션
 * API로부터 프로젝트 데이터를 가져와 카드 형태로 표시
 * 반투명 배경과 블러 효과 적용
 */
const ProjectsSection = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 프로젝트 데이터 로딩
    useEffect(() => {
        const getProjects = async () => {
            try {
                setLoading(true);
                const data = await fetchProjects();
                setProjects(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getProjects();
    }, []);

    return (
        <>
            {/* 프로젝트 섹션 앵커 - style 속성으로 스크롤 마진 지정 */}
            <div id="projects-section" style={{ scrollMarginTop: '20px' }} />

            <section className="relative py-24 z-20 bg-gray-50/70 dark:bg-background-dark/70 backdrop-blur-md">
                <Container>
                    {/* 섹션 제목 영역 */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            프로젝트
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-full mx-auto">
                            제가 진행한 프로젝트들입니다. 각 프로젝트에서 새로운 기술과 도전적인 문제 해결에 집중했습니다.
                        </p>
                    </div>

                    {/* 로딩 상태 */}
                    {loading ? (
                        <div className="text-center py-8">
                            <p className="text-gray-600 dark:text-gray-300">로딩 중...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-8">
                            <p className="text-red-500">오류가 발생했습니다: {error}</p>
                        </div>
                    ) : (
                        /* 프로젝트 목록 */
                        <div className="space-y-4 max-w-5xl mx-auto">
                            {projects.map(project => (
                                <div
                                    key={project.id}
                                    className="bg-white/50 dark:bg-background-dark2/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow px-6 py-5 border border-gray-100/50 dark:border-gray-800/50"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center">
                                        {/* 썸네일 이미지 추가 */}
                                        <div className="md:w-1/5 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                                            <Link to={`/projects/${project.id}`}>
                                                <img
                                                    src={project.thumbnail || '/src/assets/images/backgrounds/1234.jpg'}
                                                    alt={project.title}
                                                    className="w-full h-auto rounded-lg object-cover aspect-square"
                                                />
                                            </Link>
                                        </div>

                                        <div className="md:w-3/5">
                                            <Link to={`/projects/${project.id}`}>
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 hover:text-primary dark:hover:text-primary-light transition-colors">
                                                    {project.title}
                                                </h3>
                                            </Link>
                                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-1 mt-2">
                                                {project.technologies.map((tech, index) => (
                                                    <Badge key={index} color="secondary" className="text-xs">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-4 md:mt-0 md:ml-auto">
                                            <Link
                                                to={`/projects/${project.id}`}
                                                className="text-primary hover:text-primary-dark dark:hover:text-primary-light text-sm font-medium mr-6"
                                            >
                                                상세보기 &rarr;
                                            </Link>
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}

                                                    // 새창으로
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm"
                                                >
                                                    GitHub
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* 프로젝트 목록 페이지로 이동하는 버튼 */}
                    <div className="text-center mt-10">
                        <Link
                            to="/projects"
                            className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors"
                        >
                            프로젝트 목록
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ProjectsSection;