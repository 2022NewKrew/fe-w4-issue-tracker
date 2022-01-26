import { css } from "@emotion/react";
import theme from "@styles/theme";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const Taps = () => {
  return (
    <ul css={TapsStyles}>
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
    </ul>
  );
};
export default Taps;

const TapsStyles = css`
  overflow: hidden;
  display: flex;
  width: 321px;
  height: 40px;
  border: 1px solid ${theme.greyscale.line};
  border-radius: 11px;
  li {
    flex: 1;
    ${theme.flexCenter}
    background: ${theme.greyscale.background};
    a {
      ${theme.text.small}
      width: 100%;
      height: 100%;
      ${theme.flexCenter}
      flex-direction: row;

      font-weight: bold;
      color: ${theme.greyscale.label};
      span {
        font-weight: normal;
        margin-left: 8px;
        color: ${theme.greyscale.label};
      }
      svg {
        position: static;
        margin-right: 8px;
        opacity: 0.5;
      }
    }
    :hover {
      background: ${theme.greyscale.inputBackground};
    }
    :active {
      color: ${theme.greyscale.body};
      background: ${theme.greyscale.line};
    }
  }
  li:first-of-type {
    border-right: 1px solid ${theme.greyscale.line};
  }
  .activated {
    color: ${theme.greyscale.body};
    background: ${theme.greyscale.line};
    svg {
      opacity: 1;
    }
  }
`;
