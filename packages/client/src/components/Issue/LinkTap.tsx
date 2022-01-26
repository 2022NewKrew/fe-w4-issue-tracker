import Button from "@components/common/Button";
import Taps from "@components/common/Taps";

import { Link } from "react-router-dom";

import styled from "@emotion/styled";

const LinkTap = () => {
  return (
    <Wrapper>
      <Taps />
      <Link to="/issue/add">
        <Button size="small">이슈 작성</Button>
      </Link>
    </Wrapper>
  );
};

export default LinkTap;

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  & > a:last-child {
    margin-left: 16px;
  }
`;
