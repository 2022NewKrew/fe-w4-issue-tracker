import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { FilterButton } from '@components/assets';

export const FilterBarButton = () => {
    const onClickHandler = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        // TODO: 드롭다운 펼쳐지도록 구현
    };
    return <BarButton title="필터" onClickHandler={onClickHandler} hover={true} />;
};

const BarButton = styled(FilterButton)`
    min-width: 128px;
    height: 40px;
    border-right: 1px solid var(--line-color);
    background-color: var(--background-color);
    padding: 0 24px;
`;
