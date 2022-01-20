import React from 'react';
import styled from 'styled-components';
import downArrow from '/public/images/downArrow.png';

export const FilterButton = () => {
    return (
        <Wrapper>
            <div>필터</div>
            <DropdownButton src={downArrow} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 128px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const DropdownButton = styled.img`
    height: 4px;
    width: 8px;
`;
