import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection.jsx';
import RecentBlogSection from '../components/sections/RecentBlogSection';
import ContactSection from '../components/sections/ContactSection';

/**
 * HomePage 컴포넌트
 * 포트폴리오의 메인 페이지
 * 히어로 섹션은 고정되어 있고, 나머지 섹션들은 반투명하게 표시되어
 * 스크롤 시 배경 이미지가 자연스럽게 비쳐 보임
 */
const HomePage = () => {
    return (
        <main className="relative">
            {/* 히어로 섹션은 fixed로 고정 */}
            <div className="fixed inset-0 z-0">
                <HeroSection />
            </div>

            {/* 실제 컨텐츠 영역 - 히어로 섹션 위로 올라옴 */}
            <div className="relative z-10">
                {/* 히어로 섹션만큼 빈 공간 추가 */}
                <div className="h-screen"></div>

                {/*
                    실제 컨텐츠 섹션들
                    - 모든 섹션에 70% 투명도와 backdrop-blur 적용
                    - 각 섹션의 색상은 유지하되 투명도로 인해 자연스럽게 연결
                */}
                <div className="content-section">
                    <AboutSection />
                    <SkillsSection />
                    <ProjectsSection />
                    {/*<RecentBlogSection />*/}
                    {/*<ContactSection />*/}

                    {/* 푸터를 위한 여백 추가 */}
                    <div className="h-24"></div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;