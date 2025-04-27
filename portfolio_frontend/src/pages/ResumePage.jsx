import React from 'react';
import Container from '../components/common/layout/Container';
import Button from '../components/common/ui/Button';
import Card from '../components/common/ui/Card';
import Divider from '../components/common/ui/Divider';
import Badge from '../components/common/ui/Badge';

const ResumePage = () => {
    // 교육 정보
    const educations = [
        {
            id: 'edu1',
            institution: '부산대학교',
            degree: 'K-Digital 웹 개발자 양성과정',
            period: '2023년 - 2024년',
            description: '웹 개발 풀스택 과정을 수료했습니다. React, Node.js, 데이터베이스 등 현대적인 웹 개발 기술을 학습했습니다.'
        },
        {
            id: 'edu2',
            institution: '임베디드 프로그래밍',
            degree: 'C/C++ 개발자 과정',
            period: '2023년',
            description: 'C/C++ 프로그래밍 언어를 활용한 임베디드 시스템 개발 과정을 수료했습니다.'
        }
    ];

    // 경력 정보
    const experiences = [
        {
            id: 'exp1',
            company: '회전체 밸런싱 회사',
            position: '기술직',
            period: '2021년 - 2023년',
            description: '회전체 밸런싱 시스템 관리 및 유지보수 업무를 담당했습니다. 시스템 문제 진단 및 해결 능력을 키웠습니다.'
        },
        {
            id: 'exp2',
            company: '기타 산업 현장',
            position: '다양한 직무',
            period: '2018년 - 2021년',
            description: '다양한 산업 현장에서 경험을 쌓으며 문제 해결 능력과 협업 능력을 키웠습니다.'
        }
    ];

    // 기술 스택
    const skills = [
        {
            category: '프론트엔드',
            items: ['HTML/CSS', 'JavaScript', 'React', 'TailwindCSS', 'TypeScript']
        },
        {
            category: '백엔드',
            items: ['Node.js', 'Express', 'MongoDB', 'SQL']
        },
        {
            category: '도구 및 기타',
            items: ['Git', 'VSCode', 'Webpack', 'Linux', 'C/C++']
        }
    ];

    // 자격증
    const certifications = [
        {
            id: 'cert1',
            name: '정보처리기사',
            issuer: '한국산업인력공단',
            date: '2023년'
        },
        {
            id: 'cert2',
            name: 'SQLD',
            issuer: '한국데이터산업진흥원',
            date: '2023년'
        },
        {
            id: 'cert3',
            name: '운전면허 1종 보통',
            issuer: '경찰청',
            date: '2017년'
        }
    ];

    return (
        <main className="py-16 mt-10">
            <Container>
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        이력서
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                        끊임없이 성장하고 배우며, 새로운 도전을 즐기는 개발자입니다.
                    </p>
                </div>

                {/* 자기 소개 */}
                <section className="mb-12">
                    <Card className="p-6">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">자기 소개</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            저는 외향적이고 소통을 중시하는 성격으로, 동료와의 신뢰와 원활한 소통을 통해 더 큰
                            성과를 낼 수 있다고 믿습니다. 대학 시절 밴드 활동을 통해 팀워크와 협업의 가치를 깊이
                            이해하게 되었고, 의견 조율, 합주, 공연 완성의 과정을 통한 팀 단위의 경험들은
                            프로그래밍 팀 프로젝트에서도 큰 자산으로 쓰였습니다.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mt-4">
                            회전체 밸런싱 회사에 재직 당시 어떤 변수에서부터 잘못된 것인지 파악하기 힘든
                            문제들을 당면했을 때, 이를 해결하기 위해 전체를 점검하고 문제를 분석하며 우선순위를
                            설정하는 체계적인 접근법을 익혔습니다. 이러한 경험은 학습과 프로젝트 수행 과정에서도
                            논리적으로 사고하고 문제를 해결하는 데 큰 자산이 되었습니다.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mt-4">
                            코딩 입문 이전 기술이 곧 자산이라는 생각을 가지고 다양한 산업현장에서 경험을
                            쌓아왔으나, 보다 창의적이며 성장 가능성이 있는 미래에 대한 갈망으로 부산대학교 K
                            Digital 교육과정을 통해 프로그래밍의 세계에 입문했습니다.
                        </p>
                    </Card>
                </section>

                {/* 경력 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">경력</h2>
                    <div className="space-y-6">
                        {experiences.map((exp) => (
                            <Card key={exp.id} className="p-6">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.company}</h3>
                                        <p className="text-primary font-medium">{exp.position}</p>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">{exp.period}</p>
                                </div>
                                <p className="mt-4 text-gray-600 dark:text-gray-300">{exp.description}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* 교육 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">교육</h2>
                    <div className="space-y-6">
                        {educations.map((edu) => (
                            <Card key={edu.id} className="p-6">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.institution}</h3>
                                        <p className="text-primary font-medium">{edu.degree}</p>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">{edu.period}</p>
                                </div>
                                <p className="mt-4 text-gray-600 dark:text-gray-300">{edu.description}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* 기술 스택 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">기술 스택</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {skills.map((skillGroup, index) => (
                            <Card key={index} className="p-6">
                                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{skillGroup.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill, skillIndex) => (
                                        <Badge key={skillIndex} color="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* 자격증 */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">자격증</h2>
                    <Card className="p-6">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            {certifications.map((cert) => (
                                <li key={cert.id} className="py-4 first:pt-0 last:pb-0">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{cert.name}</h3>
                                            <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                                        </div>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">{cert.date}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </section>

                {/* 이력서 다운로드 */}
                <div className="text-center">
                    <Button
                        variant="primary"
                        size="lg"
                        as="a"
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        이력서 다운로드 (PDF)
                    </Button>
                </div>
            </Container>
        </main>
    );
};

export default ResumePage;