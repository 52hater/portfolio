import React from 'react';
import Container from '../common/layout/Container';
import Card from '../common/ui/Card';
import NavLink from '../common/ui/NavLink';

/**
 * AboutSection 컴포넌트
 * 개발자 소개 및 기술 스택을 카드 형태로 표시하는 섹션
 * 각 카드 클릭 시 프로젝트 섹션으로 스크롤 이동 (시각적인 효과가 굳이 필요없기 때문에 각 NavLink에 cursor-default 클래스 추가함.
 */
const AboutSection = () => {
    return (
        <section className="py-24 bg-white/70 dark:bg-background-dark/70 backdrop-blur-md">
            <Container>
                {/* 섹션 제목 영역 */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-full mx-auto">
                        저는 끊임없이 배우고 성장하는 개발자입니다. <br />
                        오늘이 가장 늦었다 생각하기에 항상 다시 오늘, 시작합니다.
                    </p>
                </div>

                {/* 기술 스택 카드 그리드 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Frontend Development 카드
                        NavLink 컴포넌트를 사용하여 프로젝트 섹션으로 스크롤 이동
                        - to: 기본 경로 지정
                        - sectionId: 이동할 섹션 ID
                        - useRouter: false로 설정하여 페이지 내부 스크롤 동작
                        - cursor-default 클래스로 기본 화살표 커서 유지
                    */}
                    <NavLink
                        to="/"
                        sectionId="projects-section"
                        useRouter={false}
                        className="block cursor-default"
                    >
                        <Card className="text-center p-8 bg-white/50 dark:bg-background-dark2/50 backdrop-blur-sm">
                            <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                Frontend Development
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                React, JavaScript, TailwindCSS 등을 활용한 사용자 친화적인 웹 애플리케이션 개발
                            </p>
                        </Card>
                    </NavLink>

                    {/* Backend Development 카드 */}
                    <NavLink
                        to="/"
                        sectionId="projects-section"
                        useRouter={false}
                        className="block cursor-default"
                    >
                        <Card className="text-center p-8 bg-white/50 dark:bg-background-dark2/50 backdrop-blur-sm">
                            <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                Backend Development
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Java, SpringBoot, MySQL을 활용한 확장 가능한 서버 및 API 개발
                            </p>
                        </Card>
                    </NavLink>

                    {/* 임베디드 시스템 카드 */}
                    <NavLink
                        to="/"
                        sectionId="projects-section"
                        useRouter={false}
                        className="block cursor-default"
                    >
                        <Card className="text-center p-8 bg-white/50 dark:bg-background-dark2/50 backdrop-blur-sm">
                            <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                임베디드 시스템
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                STM32, ESP32 board와 다양한 모듈을 이용한<br />임베디드 시스템 개발
                            </p>
                        </Card>
                    </NavLink>
                </div>
            </Container>
        </section>
    );
};

export default AboutSection;