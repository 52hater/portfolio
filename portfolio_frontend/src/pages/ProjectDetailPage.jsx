import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from '../components/common/layout/Container';
import ProjectDetail from '../components/projects/ProjectDetail';
import Button from '../components/common/ui/Button';
import { fetchProjectById } from '../services/api';

const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProject = async () => {
            try {
                setLoading(true);
                const data = await fetchProjectById(projectId);
                setProject(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getProject();
    }, [projectId]);

    return (
        <main className="py-16 mt-10">
            <Container>
                <div className="mb-6">
                    <Link
                        to="/projects"
                        className="inline-flex items-center text-primary hover:text-primary-dark dark:hover:text-primary-light transition-colors"
                    >
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        프로젝트 목록
                    </Link>
                </div>

                {loading ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600 dark:text-gray-300">로딩 중...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-12">
                        <p className="text-red-500">오류가 발생했습니다: {error}</p>
                        <div className="mt-6">
                            <Button as={Link} to="/projects" variant="primary">
                                프로젝트 목록으로 돌아가기
                            </Button>
                        </div>
                    </div>
                ) : (
                    <ProjectDetail project={project} />
                )}
            </Container>
        </main>
    );
};

export default ProjectDetailPage;