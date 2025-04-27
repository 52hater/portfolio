import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../common/ui/Badge';
import Card from '../common/ui/Card';
import { formatDate } from '../../utils/dateFormatter';

const BlogCard = ({ post }) => {
    return (
        <Card className="h-full flex flex-col">
            <h3 className="text-xl font-bold mb-2">
                <Link
                    to={`/blog/${post.id}`}
                    className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                    {post.title}
                </Link>
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {formatDate(post.date)}
            </p>

            {post.categories && post.categories.length > 0 && (
                <div className="mb-3 flex flex-wrap">
                    {post.categories.map((category, index) => (
                        <Badge key={index} color="primary" className="mr-2 mb-2">
                            {category}
                        </Badge>
                    ))}
                </div>
            )}

            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                {post.summary}
            </p>

            <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-primary hover:text-primary-dark dark:hover:text-primary-light transition-colors mt-auto"
            >
                자세히 읽기
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </Link>
        </Card>
    );
};

export default BlogCard;