import styled, { css, useTheme } from "styled-components";
import { Icon } from "../atoms/Icons";
import { Text } from "../atoms/Text";

export const Taps = ({ labelCount, milestoneCount }) => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Item>
        <Icon name="tag" color={theme.grayscale.label} />
        <Text options={{ size: "small", isLink: true }}>레이블</Text>
        <Text options={{ size: "small" }}>{`(${labelCount})`}</Text>
      </Item>
      <Item>
        <Icon name="milestone" color={theme.grayscale.label} />
        <Text options={{ size: "small", isLink: true }}>마일스톤</Text>
        <Text options={{ size: "small" }}>{`(${milestoneCount})`}</Text>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid ${theme.grayscale.line};
    border-radius: 11px;
    overflow: hidden;

    li:first-child {
      border-right: 1px solid ${theme.grayscale.line};
      box-sizing: content-box;
    }
  `}
`;

const Item = styled.li`
  ${({ theme }) => css`
    width: 160px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.grayscale.label};
    background: ${theme.grayscale.background};

    * {
      margin: 0 4px;
    }
    &:hover {
      background: ${theme.grayscale.inputBackground};
    }
    &:active {
      color: ${theme.grayscale.body};
      background: ${theme.grayscale.line};
    }
  `}
`;
