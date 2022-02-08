import styled from 'styled-components';
import { Logo } from '@components';

const Wrapper = styled.div`
    padding: 27px 80px;
`;

export function IssueList() {
    return (
        <Wrapper>
            <Logo medium />
        </Wrapper>
    );
}
