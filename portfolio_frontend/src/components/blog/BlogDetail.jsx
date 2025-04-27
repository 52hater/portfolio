import React from 'react';
import Badge from '../common/ui/Badge';
import { formatDate } from '../../utils/dateFormatter';
import MarkdownRenderer from '../../utils/markdownParser';

const BlogDetail = ({ post }) => {
    if (!post) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                    게시글을 찾을 수 없습니다.
                </h2>
            </div>
        );
    }

    return (
        <article className="max-w-3xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
                    {post.title}
                </h1>

                <div className="mb-4">
                    <p className="text-gray-600 dark:text-gray-400">
                        {formatDate(post.date)}
                    </p>
                </div>

                {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.categories.map((category, index) => (
                            <Badge key={index} color="primary">
                                {category}
                            </Badge>
                        ))}
                    </div>
                )}
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
                <MarkdownRenderer content={post.content} />
            </div>
        </article>
    );
};

export default BlogDetail;