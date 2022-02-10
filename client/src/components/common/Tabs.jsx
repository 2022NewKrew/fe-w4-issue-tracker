import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px solid #d9dbe9;
    border-radius: 11px;
    display: inline-block;
    background-color: #f7f7fc;

    > * {
        &:last-child {
            border-left: 1px solid #d9dbe9;
            border-radius: 0 11px 11px 0;
            width: 160px;
        }
    }
`;

const LabelButton = styled.button`
    &:before {
        ${({ theme }) => theme.icon('/assets/img/tag.png')}
        content: '';
        margin: 6px 10px 0 0;
    }
    padding: 5px 0;
    width: 159px;
    font-size: 16px;
    line-height: 28px;
    font-weight: 700;
    color: #6e7191;
    border-radius: 11px 0 0 11px;

    span {
        font-weight: 400;
        margin-left: 8px;
        display: inline-block;
        vertical-align: top;
    }

    &:hover {
        background-color: #eff0f6;
    }

    &:active {
        background-color: #d9dbe9;
    }
`;

export function Tabs() {
    return (
        <Wrapper>
            <LabelButton type="button">
                레이블<span>(0)</span>
            </LabelButton>
            <LabelButton type="button">
                마일스톤<span>(0)</span>
            </LabelButton>
        </Wrapper>
    );
}
