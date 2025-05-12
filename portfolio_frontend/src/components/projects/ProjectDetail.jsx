import React from 'react';
import Badge from '../common/ui/Badge';
import Button from '../common/ui/Button';

const ProjectDetail = ({ project }) => {
    if (!project) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                    프로젝트를 찾을 수 없습니다.
                </h2>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8 overflow-hidden rounded-xl shadow-lg">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                {project.title}
            </h1>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                    프로젝트 소개
                </h2>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                    {project.fullDescription}
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                    사용 기술
                </h2>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <Badge key={index} color="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap gap-4">
            {/*    {project.demoUrl && (*/}
            {/*        <Button variant="primary" size="lg" as="a" href={project.demoUrl} target="_blank" rel="noopener noreferrer">*/}
            {/*<span className="flex items-center">*/}
            {/*  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
            {/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />*/}
            {/*  </svg>*/}
            {/*  Live Demo*/}
            {/*</span>*/}
            {/*        </Button>*/}
            {/*    )}*/}

                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                        GitHub
                    </a>
                )}

            </div>
        </div>
    );
};

export default ProjectDetail;