import React, { useState } from 'react';
import Container from '../common/layout/Container';
import Button from '../common/ui/Button';

/**
 * ContactSection 컴포넌트
 * 연락처 정보와 메시지 폼을 표시하는 섹션
 * 반투명 배경과 블러 효과 적용
 * 현재 HomePage에서는 비활성화 상태
 */
const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });

    // 폼 입력 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 폼 제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();

        // 폼 검증
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({
                submitted: true,
                success: false,
                message: '모든 필드를 입력해주세요.'
            });
            return;
        }

        // 이메일 형식 검증
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormStatus({
                submitted: true,
                success: false,
                message: '유효한 이메일 주소를 입력해주세요.'
            });
            return;
        }

        // 실제 프로젝트에서는 여기서 API 호출을 통해 폼 데이터를 서버로 전송
        // 현재는 성공 메시지만 표시
        setFormStatus({
            submitted: true,
            success: true,
            message: '메시지가 성공적으로 전송되었습니다!'
        });

        // 폼 리셋
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section className="relative py-24 z-20 bg-gray-50/70 dark:bg-background-dark2/70 backdrop-blur-md">
            <Container>
                {/* 섹션 제목 영역 */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Contact Me
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        프로젝트 협업, 커리어 기회, 또는 질문이 있으시면 언제든지 연락해주세요.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* 연락처 정보 섹션 */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                            연락처 정보
                        </h3>

                        <div className="space-y-6">
                            {/* 이메일 정보 */}
                            <div className="flex items-start">
                                <div className="mr-4 text-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
                                        Email
                                    </h4>
                                    <a
                                        href="mailto:youcancel@naver.com"
                                        className="text-gray-600 dark:text-gray-300 hover:text-primary"
                                    >
                                        youcancel@naver.com
                                    </a>
                                </div>
                            </div>

                            {/* GitHub 정보 */}
                            <div className="flex items-start">
                                <div className="mr-4 text-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
                                        GitHub
                                    </h4>
                                    <a
                                        href="https://github.com/52hater"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 dark:text-gray-300 hover:text-primary"
                                    >
                                        github.com/52hater
                                    </a>
                                </div>
                            </div>

                            {/* 소셜 미디어 정보 */}
                            <div className="flex items-start">
                                <div className="mr-4 text-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
                                        Social
                                    </h4>
                                    <div className="space-y-2">
                                        <a
                                            href="https://linkedin.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-gray-600 dark:text-gray-300 hover:text-primary"
                                        >
                                            LinkedIn
                                        </a>
                                        <a
                                            href="https://twitter.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-gray-600 dark:text-gray-300 hover:text-primary"
                                        >
                                            Twitter
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 컨택트 폼 섹션 */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                            메시지 보내기
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* 이름 입력 필드 */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    이름
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                    placeholder="이름을 입력하세요"
                                />
                            </div>

                            {/* 이메일 입력 필드 */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    이메일
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                    placeholder="이메일을 입력하세요"
                                />
                            </div>

                            {/* 메시지 입력 필드 */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    메시지
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                    placeholder="메시지를 입력하세요"
                                />
                            </div>

                            {/* 폼 제출 상태 메시지 */}
                            {formStatus.submitted && (
                                <div className={`p-3 rounded-md ${formStatus.success ? 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-400'}`}>
                                    {formStatus.message}
                                </div>
                            )}

                            {/* 제출 버튼 */}
                            <div>
                                <Button type="submit" variant="primary" fullWidth>
                                    보내기
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactSection;