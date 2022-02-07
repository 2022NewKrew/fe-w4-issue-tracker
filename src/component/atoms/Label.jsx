import styled, { css } from "styled-components";
import { Icon } from "./Icons";
import { Text } from "./Text";

export const LargeLabel = ({ isOpen, ...props }) => {
  const iconName = isOpen ? "alert-circle" : "archive";
  const text = isOpen ? "열린 이슈" : "닫힌 이슈";

  return (
    <Large isOpen={isOpen} {...props}>
      <Icon name={iconName} />
      <Text options={{ size: "xsmall" }}>{text}</Text>
    </Large>
  );
};

export const SmallLabel = ({ name, backgroundColor, color, ...props }) => {
  return (
    <Small backgroundColor={backgroundColor} color={color} {...props}>
      <Text options={{ size: "xsmall" }}>{name}</Text>
    </Small>
  );
};

export const LineLabel = ({ name, ...props }) => (
  <Line {...props}>
    <Text options={{ size: "xsmall" }}>{name}</Text>
  </Line>
);

const Large = styled.div(({ theme, isOpen }) => {
  const color = isOpen ? theme.color.blue : theme.color.purple;
  return css`
    display: flex;
    width: 100px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background-color: ${color.light};
    border: 1px solid ${color.default};
    border-radius: 30px;
    color: ${color.default};

    & > *:first-child {
      margin-right: 4px;
    }
  `;
});

const Small = styled.div(({ theme, backgroundColor, color }) => {
  //const color = isBright ? theme.grayscale.offWhite : theme.grayscale.titleActive;
  return css`
    height: 28px;
    padding: 0px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${color};
    background-color: ${backgroundColor};
    border-radius: 30px;
  `;
});

const Line = styled.div(
  ({ theme }) => css`
    height: 28px;
    padding: 0px 16px;
    display: flex;
    align-items: center;
    border: 1px solid ${theme.grayscale.line};
    border-radius: 30px;
    color: ${theme.grayscale.label};
  `
);
