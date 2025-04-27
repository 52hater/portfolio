import React from 'react';

/**
 * 마크다운을 HTML로 변환하는 간단한 파서
 *
 * 실제 프로젝트에서는 react-markdown, remark-gfm, rehype-raw 등의
 * 라이브러리를 설치하여 사용하는 것이 좋습니다.
 *
 * 이 파일은 마크다운 라이브러리 설치 전에 임시로 사용할 수 있는 간단한 구현입니다.
 */
export const MarkdownRenderer = ({ content }) => {
    // 마크다운이 제공되지 않은 경우
    if (!content) {
        return null;
    }

    // HTML이 포함된 마크다운의 경우 (블로그 포스트 등)
    if (content.includes('<')) {
        return (
            <div
                className="prose prose-slate dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        );
    }

    // 간단한 마크다운 변환 로직
    // 이 함수는 기본적인 변환만 제공합니다
    const parseMarkdown = (md) => {
        let html = md;

        // 제목 변환
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');

        // 강조 텍스트
        html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

        // 코드 블록
        html = html.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');

        // 인라인 코드
        html = html.replace(/`(.*?)`/gim, '<code>$1</code>');

        // 링크
        html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

        // 단락
        html = html.replace(/^\s*(\n)?(.+)/gim, function(m) {
            return /^<(\/)?(h\d|p|ul|ol|li|blockquote|pre|img|code)/.test(m) ? m : '<p>' + m + '</p>';
        });

        // 줄바꿈
        html = html.replace(/\n\s*\n/gim, '</p>\n<p>');

        return html;
    };

    return (
        <div
            className="prose prose-slate dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
        />
    );
};

export default MarkdownRenderer;