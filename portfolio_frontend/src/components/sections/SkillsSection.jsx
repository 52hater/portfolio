import React from 'react';
import Container from '../common/layout/Container';

import javaImage from '../../assets/images/icons/java.png';
import cImage from '../../assets/images/icons/c.png';
import cppImage from '../../assets/images/icons/cpp.png';
import pythonImage from '../../assets/images/icons/python.png';
import bootImage from '../../assets/images/icons/boot.png';
import reactImage from '../../assets/images/icons/react.png';
import mysqlImage from '../../assets/images/icons/mysql.png';
import cubeImage from '../../assets/images/icons/cube.png';
import espidfImage from '../../assets/images/icons/Espressif.png';
import pytorchImage from '../../assets/images/icons/pytorch.png';

/**
 * SkillsSection 컴포넌트
 * 개발자의 기술 스택을 아이콘과 함께 표시하는 섹션
 * 반투명 배경과 블러 효과를 적용하여 배경 이미지가 비치도록 함
 */
const SkillsSection = () => {
    // 스킬 데이터
    const skills = [
        { name: "Java", icon: javaImage },
        { name: "C", icon: cImage },
        { name: "C++", icon: cppImage },
        { name: "Python", icon: pythonImage },
        { name: "Spring Boot", icon: bootImage },
        { name: "React", icon: reactImage },
        { name: "MySQL", icon: mysqlImage },
        { name: "CubeIDE", icon: cubeImage },
        { name: "ESP-IDF", icon: espidfImage },
        { name: "PyTorch", icon: pytorchImage }
    ];

    return (
        <section className="py-24 bg-white/70 dark:bg-background-dark/70 backdrop-blur-md">
            <Container>
                {/* 섹션 제목 */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Skills
                    </h2>
                </div>

                {/* 스킬 아이콘 그리드 */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 max-w-full mx-auto">
                    {skills.map((skill, index) => (
                        <div key={index} className="text-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 mb-3 mx-auto flex items-center justify-center">
                                <img
                                    src={skill.icon}
                                    alt={`${skill.name} icon`}
                                    className="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 object-contain"
                                />
                            </div>
                            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default SkillsSection;