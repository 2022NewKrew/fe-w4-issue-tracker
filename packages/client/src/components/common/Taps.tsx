import { css } from "@emotion/react";
import theme from "@styles/theme";
import { NavLink } from "react-router-dom";

const Taps = () => {
  return (
    <ul css={TapsStyles}>
      <li>
        <NavLink
          to="/label"
          className={({ isActive }) => (isActive ? "activated" : "")}
        >
          레이블<span>(0)</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/milestone"
          className={({ isActive }) => (isActive ? "activated" : "")}
        >
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
    }
    :hover {
      background: ${theme.greyscale.inputBackgound};
    }
    :active {
      color: ${theme.greyscale.body};
      background: ${theme.greyscale.line};
    }
  }
  li:first-child {
    border-right: 1px solid ${theme.greyscale.line};
  }
  .activated {
    color: ${theme.greyscale.body};
    background: ${theme.greyscale.line};
  }
`;
