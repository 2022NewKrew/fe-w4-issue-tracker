import { NavLink } from "react-router-dom";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Icon from "@icon";

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
  ${({ theme: { greyscale, flexCenter, text } }) => css`
    overflow: hidden;
    display: flex;
    width: 321px;
    height: 40px;
    border: 1px solid ${greyscale.line};
    border-radius: 11px;
    li {
      flex: 1;
      ${flexCenter}
      background: ${greyscale.background};
      a {
        ${text.small}
        width: 100%;
        height: 100%;
        ${flexCenter}
        flex-direction: row;

        font-weight: bold;
        color: ${greyscale.label};
        span {
          font-weight: normal;
          margin-left: 8px;
          color: ${greyscale.label};
        }
        svg {
          position: static;
          margin-right: 8px;
          opacity: 0.5;
        }
      }
      :hover {
        background: ${greyscale.inputBackground};
      }
      :active {
        color: ${greyscale.body};
        background: ${greyscale.line};
      }
    }
    li:first-of-type {
      border-right: 1px solid ${greyscale.line};
    }
    .activated {
      color: ${greyscale.body};
      background: ${greyscale.line};
      svg {
        opacity: 1;
      }
    }
  `}
`;
