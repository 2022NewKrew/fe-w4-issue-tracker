import React from 'react';
import styled from 'styled-components';
import { AlignXYCenter, DisplayBold } from '@styles/styleTemplates';
import { ReactComponent as AlertCircle } from '@icons/AlertCircle.svg';
import { AlignYCenter } from '../../styles/styleTemplates';

export const ErrorPage = () => {
    return (
        <ErrorDisplay>
            <AlertCircle />
            <span>404 요청하신 페이지를 찾을 수 없습니다</span>
        </ErrorDisplay>
    );
};

const ErrorDisplay = styled.div`
    ${DisplayBold}
    ${AlignXYCenter}
    height: 56px;
    padding-top: 100px;
    & svg {
        width: 32px;
        height: 32px;
        padding: 12px;
        path {
            stroke: red;
        }
    }
`;
