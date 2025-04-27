import React, { useState, useEffect } from 'react';
import Container from '../components/common/layout/Container';
import CategoryFilter from '../components/blog/CategoryFilter';
import List from '../components/common/ui/List';
import BlogCard from '../components/blog/BlogCard';
import { fetchBlogPosts } from '../services/api';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 블로그 포스트 데이터 가져오기
    useEffect(() => {
        const getPosts = async () => {
            try {
                setLoading(true);
                const data = await fetchBlogPosts();
                setPosts(data);
                setFilteredPosts(data);

                // 모든 카테고리 추출
                const allCategories = [...new Set(data.flatMap(post => post.categories || []))];
                setCategories(allCategories);

                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    // 카테고리 변경 시 포스트 필터링
    useEffect(() => {
        if (activeCategory === 'all') {
            setFilteredPosts(posts);
        } else {
            const filtered = posts.filter(post =>
                post.categories && post.categories.includes(activeCategory)
            );
            setFilteredPosts(filtered);
        }
    }, [activeCategory, posts]);

    return (
        <main className="py-16 mt-10">
            <Container>
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        블로그
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                        웹 개발 및 프로그래밍에 관한 생각과 경험을 공유합니다. 새로운 기술과 개발 방법론에 대해 끊임없이 탐구합니다.
                    </p>
                </div>

                <CategoryFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />

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
                        items={filteredPosts}
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
                        emptyMessage="해당 카테고리에 맞는 게시글이 없습니다."
                    />
                )}
            </Container>
        </main>
    );
};

export default BlogPage;