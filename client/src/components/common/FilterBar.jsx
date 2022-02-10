import styled from 'styled-components';

const SearchIcon = styled.i`
    position: absolute;
    top: 11px;
    left: 151px;
    display: inline-block;
    vertical-align: top;
    background: url('/assets/img/search.png') no-repeat;
    width: 16px;
    height: 16px;
`;

const FilterButton = styled.button`
    padding: 5px 23px;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    color: #6e7191;
    border-right: 1px solid #d9dbe9;
    box-sizing: content-box;
    width: 80px;
    background: #f7f7fc;
    border: 1px solid #d9dbe9;
    border-radius: 11px 0 0 11px;

    &:after {
        content: '';
        display: inline-block;
        vertical-align: top;
        margin: 4px 0 0 36px;
        background: url('/assets/img/dropdown.png') no-repeat;
        width: 16px;
        height: 16px;
    }

    &:hover {
        color: #4e4b66;
        background-color: #d9dbe9;
    }
`;

const FilterInput = styled.input`
    padding: 5px 25px 5px 49px;
    width: 397px;
    border: 0;
    font-size: 16px;
    line-height: 28px;
    color: #14142b;
    border-top: 1px solid #d9dbe9;
    border-bottom: 1px solid #d9dbe9;
    border-right: 1px solid #d9dbe9;
    border-radius: 0 11px 11px 0;
    background-color: #eff0f6;

    &:focus {
        outline: none;
        background-color: #fefefe;
    }

    &:focus ~ ${FilterButton} {
        background-color: red;
    }
`;

const Wrapper = styled.div`
    position: relative;
    width: 601px;
    display: inline-block;
    vertical-align: top;

    &:focus-within {
        ${FilterButton} {
            background-color: #fefefe;
        }
    }
`;

export function FilterBar() {
    return (
        <Wrapper>
            <FilterButton>필터</FilterButton>
            <SearchIcon />
            <FilterInput
                type="text"
                placeholder="is:issue is:open"
                onFocus={({ target }) =>
                    (target.placeholder = 'Search all issues')
                }
                onBlur={({ target }) =>
                    (target.placeholder = 'is:issue is:open')
                }
            />
        </Wrapper>
    );
}
