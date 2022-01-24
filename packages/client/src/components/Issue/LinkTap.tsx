import Taps from "@components/common/Taps";
import styled from "@emotion/styled";
import { ButtionStyle } from "@styles/button";
import { Link } from "react-router-dom";

const LinkTap = () => {
  return (
    <Wrapper>
      <Taps />
      <Link to="/issue/add">
        <button css={ButtionStyle({ color: "primary", size: "small" })}>
          이슈 작성
        </button>
      </Link>
    </Wrapper>
  );
};

export default LinkTap;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  & > a:last-child {
    margin-left: 16px;
  }
`;
