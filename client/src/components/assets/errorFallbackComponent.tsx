import React from 'react';
import styled from 'styled-components';

export const errorFallbackComponent = () => {
    return <Error>Error!</Error>;
};

const Error = styled.div`
    color: var(--error1-color);
`;
