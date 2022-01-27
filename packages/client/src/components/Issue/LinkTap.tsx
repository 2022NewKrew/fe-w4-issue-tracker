import Button from "@components/common/Button";
import Taps from "@components/common/Taps";

import styled from "@emotion/styled";

const LinkTap = () => {
  return (
    <Wrapper>
      <Taps />
      <Button size="small" link="/issue/new">
        이슈 작성
      </Button>
    </Wrapper>
  );
};

export default LinkTap;

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  & > button:last-of-type {
    margin-left: 16px;
  }
`;
