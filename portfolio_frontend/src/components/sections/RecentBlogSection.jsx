import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/layout/Container';
import List from '../common/ui/List';
import BlogCard from '../blog/BlogCard';
import { fetchBlogPosts } from '../../services/api';

/**
 * RecentBlogSection 컴포넌트
 * 최근 블로그 포스트를 표시하는 섹션
 * API로부터 블로그 데이터를 가져와 최근 3개만 표시
 * 반투명 배경과 블러 효과 적용
 */
const RecentBlogSection = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 블로그 포스트 데이터 로딩
    useEffect(() => {
        const getPosts = async () => {
            try {
                setLoading(true);
                const data = await fetchBlogPosts();
                // 최근 블로그 포스트 3개만 표시
                setPosts(data.slice(0, 3));
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    return (
        <>
            {/* 블로그 섹션 앵커 - 더 상단에 위치 */}
            <div id="blog-section" style={{ scrollMarginTop: '100px' }} />

            <section className="py-16 pt-4 bg-white/70 dark:bg-background-dark/70 backdrop-blur-md">
                <Container>
                    {/* 섹션 제목 영역 */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            최근 블로그 포스트
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            왜 code가 아닌, chord일까요? 다라마바사가나다 CDEFGABC가 어렴풋이 기억나시나요?
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
                        /* 블로그 포스트 그리드 */
                        <List
                            items={posts}
                            renderItem={(post) => <BlogCard post={post} />}
                            keyExtractor={(post) => post.id}
                            layout="grid"
                            gridConfig={{
                                cols: {
                                    sm: 1,
                                    md: 2,
                                    lg: 3
                                },
                                gap: 'gap-6'
                            }}
                            emptyMessage="게시글이 없습니다."
                        />
                    )}

                    {/* 블로그 목록 페이지로 이동하는 버튼 */}
                    <div className="text-center mt-10">
                        <Link
                            to="/blog"
                            className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors"
                        >
                            블로그 포스트 목록
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default RecentBlogSection;