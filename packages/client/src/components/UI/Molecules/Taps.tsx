import Icon from "@UI/Icon";

import { NavLink } from "react-router-dom";

import styled from "@emotion/styled";

const tap = [
  {
    to: "label",
    name: "레이블",
    count: 0,
  },
  {
    to: "milestone",
    name: "마일스톤",
    count: 0,
  },
];

const Taps = () => {
  const createTap = () => {
    return tap.map(({ to, name, count }) => (
      <li key={to}>
        <NavLink
          to={`/${to}`}
          className={({ isActive }) => (isActive ? "activated" : "")}
        >
          <Icon name="label" />
          {name}
          <span>({count})</span>
        </NavLink>
      </li>
    ));
  };

  return <Wrapper>{createTap()}</Wrapper>;
};
export default Taps;

const Wrapper = styled.ul`
  overflow: hidden;
  display: flex;
  width: 321px;
  height: 40px;
  border: 1px solid var(--line);
  border-radius: 11px;
  & > li {
    flex: 1;
    & > a {
      font-weight: bold;
      ${({ theme }) => theme.FlexCenter}
      flex-direction: row;
      color: var(--label);
      height: 100%;
      & > svg {
        position: static;
        margin-right: 8px;
        opacity: 0.5;
      }
      & > span {
        font-weight: normal;
        margin-left: 8px;
        color: inherit;
      }
    }
    :hover {
      background: var(--inputBackground);
    }
    :active {
      color: var(--body);
      background: var(--line);
    }
    :first-of-type {
      border-right: 1px solid var(--line);
    }
  }
  .activated {
    color: var(--body);
    background: var(--line);
    svg {
      opacity: 1;
    }
  }
`;
