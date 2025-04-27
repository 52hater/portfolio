import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from '../components/common/layout/Container';
import BlogDetail from '../components/blog/BlogDetail';
import Button from '../components/common/ui/Button';
import { fetchBlogPostById } from '../services/api';

const BlogPostPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPost = async () => {
            try {
                setLoading(true);
                const data = await fetchBlogPostById(postId);
                setPost(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getPost();
    }, [postId]);

    return (
        <main className="py-16 mt-10">
            <Container>
                <div className="mb-6">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-primary hover:text-primary-dark dark:hover:text-primary-light transition-colors"
                    >
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        블로그 목록
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
                            <Button as={Link} to="/blog" variant="primary">
                                블로그 목록으로 돌아가기
                            </Button>
                        </div>
                    </div>
                ) : (
                    <BlogDetail post={post} />
                )}
            </Container>
        </main>
    );
};

export default BlogPostPage;