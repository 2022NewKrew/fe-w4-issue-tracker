import styled from 'styled-components';

const DropDownButton = styled.button`
    font-size: 16px;
    line-height: 28px;
    font-weight: 700;
    color: #6e7191;

    &:after {
        content: '';
        display: inline-block;
        vertical-align: top;
        margin: 3px 0 0 4px;
        background: url('/assets/img/dropdown.png') no-repeat;
        width: 16px;
        height: 16px;
    }
`;

export function IndicatorDropDown({ children }) {
    return <DropDownButton>{children}</DropDownButton>;
}
