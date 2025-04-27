import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/layout/Container';
import Button from '../common/ui/Button';
import heroImage from '../../assets/images/backgrounds/bg4.png';

const HeroSection = () => {
    return (
        <section
            className="w-full h-full flex items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* 배경 오버레이 추가 (선택사항) */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[80vh]">
                    <div className="md:w-full space-y-8 text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            안녕하세요,
                            <div className="h-5"></div>
                            <span className="text-slate-300">이왕훈</span> 입니다
                        </h1>

                        <div className="h-1"></div>
                        <p className="text-l text-white max-w-lg mx-auto">
                            프론트엔드, 백엔드, 임베디드 시스템, 그 어떠한 분야든<br /> 직접 구현하는 것을 즐깁니다.<br/><br/>
                            일단 해보는 것,<br/>
                            그것이 변화의 물결을 만듭니다.<br/><br/>
                            <p className="text-l text-bold text-pink-200 max-w-lg mx-auto"> "가장 중요한 것은 이미 가지고 있습니다." <br/></p><br />
                            <p className="text-l text-white max-w-lg mx-auto">저는 오늘도 시작합니다.</p>
                        </p>

                        {/*<div className="flex flex-wrap gap-4 justify-center mt-8">*/}
                        {/*    <Button*/}
                        {/*        as={Link}*/}
                        {/*        to="/projects"*/}
                        {/*        variant="primary"*/}
                        {/*        size="lg"*/}
                        {/*        className="text-lg px-8 py-4"*/}
                        {/*    >*/}
                        {/*        프로젝트 보기*/}
                        {/*    </Button>*/}

                        {/*    <Button*/}
                        {/*        as={Link}*/}
                        {/*        to="/resume"*/}
                        {/*        variant="outline"*/}
                        {/*        size="lg"*/}
                        {/*        className="text-lg px-8 py-4"*/}
                        {/*    >*/}
                        {/*        이력서*/}
                        {/*    </Button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;