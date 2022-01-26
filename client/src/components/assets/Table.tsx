import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { RoundBorderDiv } from '@styles/styleTemplates';

interface IProps {
    tableHeader: ReactNode;
    children?: ReactNode;
}

export const Table = ({ tableHeader, children }: IProps) => {
    return (
        <Container>
            <TableHeader>{tableHeader}</TableHeader>
            <TableData>{children}</TableData>
        </Container>
    );
};

const Container = styled(RoundBorderDiv)`
    display: flex;
    flex-direction: column;
`;

const TableHeader = styled.div`
    background-color: var(--background-color);
    height: 64px;
`;

const TableData = styled.div`
    & div {
        background-color: var(--off-white-color);
        border-top: 1px solid var(--line-color);
        height: 100px;
    }
`;
