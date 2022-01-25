import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { RoundBorderDiv, TextSmall } from '@styles/styleTemplates';
import { FilterButton } from './FilterButton';
import { ReactComponent as SearchIcon } from '@icons/Search.svg';

export const FilterBar = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const onFocusHandler = () => {
        setIsFocus(true);
    };
    const onBlurHander = () => {
        setIsFocus(false);
    };
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    const getPlaceHolder = () => {
        if (inputValue.length > 0) return '';
        return isFocus ? 'Search all issues' : 'is:issue is:open';
    };

    return (
        <Wrapper>
            <SearchInput
                type="text"
                onFocus={onFocusHandler}
                onBlur={onBlurHander}
                onChange={onChangeHandler}
                placeholder={getPlaceHolder()}
                value={inputValue}
            />
            <FilterBarBorder isEmpty={inputValue.length === 0}>
                <FilterButton />
                <Search>
                    <SearchIcon />
                </Search>
            </FilterBarBorder>
        </Wrapper>
    );
};

const Wrapper = styled.form`
    position: relative;
`;

const SearchInput = styled.input`
    position: absolute;
    top: 6px;
    left: 177px;
    ${TextSmall}
    color: var(--title-active-color);
    background-color: var(--input-background-color);
    width: 400px;
    height: 28px;
    text-indent: 8px;

    &::placeholder {
        color: var(--placeholder-color);
    }
    &:focus {
        background-color: var(--off-white-color);
    }
`;

const FilterBarBorder = styled(RoundBorderDiv)<{ isEmpty: boolean }>`
    width: 600px;
    height: 40px;

    & svg path {
        stroke: ${({ isEmpty }) => (isEmpty ? 'var(--placeholder-color)' : 'var(--label-color)')};
    }
    ${SearchInput}:active ~ & {
        border-color: var(--active-border-color);
        & div {
            background-color: var(--off-white-color);
        }
    }
    ${SearchInput}:focus ~ & {
        border-color: var(--active-border-color);
        & > * {
            background-color: var(--off-white-color);
        }
        svg path {
            stroke: var(--label-color);
        }
    }
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--input-background-color);
    padding: 0 24px;
    box-sizing: border-box;
    width: 100%;
`;
