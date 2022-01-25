import React from 'react';
import styled from 'styled-components';
import { FilterButton } from '@components/assets';
import { ReactComponent as SearchIcon } from '@icons/Search.svg';
export const Filter = () => {
    return (
        <Wrapper>
            <FilterButton />
            <Search>
                <SearchIcon />
                <form>
                    <input type="text" />
                </form>
            </Search>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    border-radius: 11px;
    border: 1px solid var(--border-color);
    display: flex;
    overflow: hidden;
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    width: 472px;
    height: 40px;
    background-color: var(--input-background-color);
    padding: 0 26px;
    box-sizing: border-box;

    & > img {
        width: 16px;
        height: 16px;
    }

    & input {
        background-color: var(--input-background-color);
    }
`;
