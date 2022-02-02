import Icon from "@styles/Icon";

import { NavLink } from "react-router-dom";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Taps = () => {
  return (
    <Wrapper>
      <li>
        <NavLink
          to="/label"
          className={({ isActive }) => (isActive ? "activated" : "")}
        >
          <Icon name="tag" />
          레이블<span>(0)</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/milestone"
          className={({ isActive }) => (isActive ? "activated" : "")}
        >
          <Icon name="milestone" />
          마일스톤<span>(0)</span>
        </NavLink>
      </li>
    </Wrapper>
  );
};
export default Taps;

const Wrapper = styled.ul`
  ${({ theme: { Greyscale, FlexCenter, FontSize } }) => css`
    overflow: hidden;
    display: flex;
    width: 321px;
    height: 40px;
    border: 1px solid ${Greyscale.line};
    border-radius: 11px;
    li {
      flex: 1;
      ${FlexCenter}
      background: ${Greyscale.background};
      a {
        ${FontSize.small}
        width: 100%;
        height: 100%;
        ${FlexCenter}
        flex-direction: row;

        font-weight: bold;
        color: ${Greyscale.label};
        span {
          font-weight: normal;
          margin-left: 8px;
          color: ${Greyscale.label};
        }
        svg {
          position: static;
          margin-right: 8px;
          opacity: 0.5;
        }
      }
      :hover {
        background: ${Greyscale.inputBackground};
      }
      :active {
        color: ${Greyscale.body};
        background: ${Greyscale.line};
      }
    }
    li:first-of-type {
      border-right: 1px solid ${Greyscale.line};
    }
    .activated {
      color: ${Greyscale.body};
      background: ${Greyscale.line};
      svg {
        opacity: 1;
      }
    }
  `}
`;
