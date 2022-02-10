import styled from 'styled-components';

const DropDownButton = styled.button`
    font-size: 16px;
    line-height: 28px;
    font-weight: 700;
    color: #6e7191;

    &:after {
        content: '';
        margin: 4px 0 0 4px;
        ${({ theme }) => theme.icon('/assets/img/dropdown.png')}
    }
`;

export function IndicatorDropDown({ children }) {
    return <DropDownButton>{children}</DropDownButton>;
}
