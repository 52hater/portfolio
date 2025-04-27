import React from 'react';

/**
 * 범용 리스트 컴포넌트
 *
 * @param {Array} items - 표시할 데이터 배열
 * @param {Function} renderItem - 각 항목을 렌더링하는 함수
 * @param {Function} keyExtractor - 각 항목의 고유 키를 추출하는 함수
 * @param {String} emptyMessage - 데이터가 없을 때 표시할 메시지
 * @param {String} className - 리스트 컨테이너에 적용할 추가 클래스
 * @param {String} layout - 레이아웃 타입 ('grid' 또는 'list')
 * @param {Object} gridConfig - 그리드 레이아웃 설정
 */
const List = ({
                  items = [],
                  renderItem,
                  keyExtractor,
                  emptyMessage = "데이터가 없습니다.",
                  className = "",
                  layout = "grid",
                  gridConfig = {
                      cols: {
                          sm: 1,   // 기본 1열
                          md: 2,   // 중간 화면 2열
                          lg: 3,   // 큰 화면 3열
                      },
                      gap: 'gap-6',
                  }
              }) => {
    if (!items || items.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                {emptyMessage}
            </div>
        );
    }

    // 그리드 레이아웃 클래스 생성
    const gridClasses = layout === 'grid'
        ? `grid grid-cols-${gridConfig.cols.sm} md:grid-cols-${gridConfig.cols.md} lg:grid-cols-${gridConfig.cols.lg} ${gridConfig.gap}`
        : '';

    // 리스트 레이아웃 클래스
    const listClasses = layout === 'list'
        ? 'flex flex-col gap-4'
        : '';

    return (
        <div className={`${gridClasses} ${listClasses} ${className}`}>
            {items.map((item) => (
                <div key={keyExtractor(item)} className="list-item" style={{ listStyle: 'none'}}>
                    {renderItem(item)}
                </div>
            ))}
        </div>
    );
};

export default List;