import { Taps } from "@UI/Molecules";
import Atoms from "@UI/Atoms";

import styled from "@emotion/styled";

const LinkTap = () => {
  return (
    <Wrapper className="LinkTap">
      <Taps />
      <Atoms.Button
        size="small"
        link="/issue/new"
        icon="plus_white"
        text="이슈 작성"
      />
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
