import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../common/ui/Badge';
import Card from '../common/ui/Card';

const ProjectCard = ({ project }) => {
    const { id, title, description, thumbnail, technologies, demoUrl, githubUrl } = project;

    return (
        <Card className="h-full flex flex-col overflow-hidden" padding={false}>
            <Link to={`/projects/${id}`} className="aspect-video overflow-hidden">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </Link>

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                    {description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                    {technologies.map((tech, index) => (
                        <Badge key={index} color="secondary" className="mr-1 mb-1">
                            {tech}
                        </Badge>
                    ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                    <Link
                        to={`/projects/${id}`}
                        className="text-primary hover:text-primary-dark dark:hover:text-primary-light transition-colors font-medium"
                    >
                        상세 보기
                    </Link>

                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default ProjectCard;