import React from 'react';
import styled from 'styled-components';
import { FilterButton } from '@components/assets';

export const FilterBarButton = () => {
    const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
    };
    return <BarButton title="필터" onClickHandler={onClickHandler} />;
};

const BarButton = styled(FilterButton)`
    min-width: 128px;
    height: 40px;
    border-right: 1px solid var(--line-color);
    background-color: var(--background-color);
    padding: 0 24px;
`;
