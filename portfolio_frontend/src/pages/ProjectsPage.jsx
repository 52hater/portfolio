import React, { useState, useEffect } from 'react';
import Container from '../components/common/layout/Container';
import List from '../components/common/ui/List';
import ProjectCard from '../components/projects/ProjectCard';
import { fetchProjects } from '../services/api';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 프로젝트 데이터 가져오기
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
        <main className="py-16 mt-10">
            <Container>
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        프로젝트
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-full">
                        제가 진행한 다양한 프로젝트들을 소개합니다. 각 프로젝트에서 새로운 기술과 도전적인 문제 해결에 집중했습니다.
                    </p>
                </div>

                {loading ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600 dark:text-gray-300">로딩 중...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-12">
                        <p className="text-red-500">오류가 발생했습니다: {error}</p>
                    </div>
                ) : (
                    <List
                        items={projects}
                        renderItem={(project) => <ProjectCard project={project} />}
                        keyExtractor={(project) => project.id}
                        layout="grid"
                        gridConfig={{
                            cols: {
                                sm: 1,
                                md: 2,
                                lg: 3
                            },
                            gap: 'gap-6'
                        }}
                        emptyMessage="프로젝트가 없습니다."
                    />
                )}
            </Container>
        </main>
    );
};

export default ProjectsPage;