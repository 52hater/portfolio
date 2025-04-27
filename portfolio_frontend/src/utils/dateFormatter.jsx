/**
 * 날짜 문자열을 받아 yyyy년 MM월 dd일 형식으로 변환
 * @param {string} dateString - 날짜 문자열 (예: '2025-04-01')
 * @returns {string} 포맷팅된 날짜 문자열
 */
export const formatDate = (dateString) => {
    if (!dateString) return '';

    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

/**
 * 날짜 문자열을 받아 상대적 시간으로 변환 (예: '3일 전')
 * @param {string} dateString - 날짜 문자열
 * @returns {string} 상대적 시간 문자열
 */
export const getRelativeTime = (dateString) => {
    if (!dateString) return '';

    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) {
        return '방금 전';
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes}분 전`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours}시간 전`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
        return `${diffInDays}일 전`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
        return `${diffInMonths}개월 전`;
    }

    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears}년 전`;
};