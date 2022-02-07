import styled, { css } from "styled-components";

function findColor(theme, color) {
  let INIT = "";
  let LIGHT = "";
  let DARK = "";
  if (color === "blue") {
    INIT = theme.colors.blue;
    LIGHT = theme.colors.lightBlue;
    DARK = theme.colors.darkBlue;
  } else {
    INIT = "#14142b";
    LIGHT = "#1e1e40";
    DARK = "#d9dbe9";
  }
  return [INIT, LIGHT, DARK];
}

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  cursor: ${(props) => (props.disable === true ? "not-allowed" : "pointer")};

  font-weight: 700;

  color: ${(props) => props.theme.greyscale.offWhite};

  opacity: ${(props) => (props.disable ? 0.5 : 1)};

  ${(props) => {
    const size = props.size;
    if (size === "large") {
      return `
        width: 340px;
        height: 64px;
        border-radius: 20px;
        font-size: ${(props) => props.theme.fontSizes.medium};
      `;
    } else if (size === "medium") {
      return `
        width: 240px;
        height: 56px;
        border-radius: 20px;
        font-size: ${(props) => props.theme.fontSizes.medium};
      `;
    } else if (size === "small") {
      return `
        width: 120px;
        height: 40px;
        border-radius: 11px;
        font-size: ${(props) => props.theme.fontSizes.extraSmall};
      `;
    }
  }}

  ${(props) => {
    const mainColor = props.color;
    const [INIT, LIGHT, DARK] = findColor(props.theme, mainColor);

    if (props.disable) {
      return css`
        background-color: ${INIT};
      `;
    } else {
      return css`
        background-color: ${INIT};

        &:hover {
          background-color: ${DARK};
        }
        &:focus {
          background-color: ${INIT};
          border: 4px solid ${LIGHT};
        }
      `;
    }
  }};
`;

export const SecondaryButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 11px;
  padding: 0 24px;
  cursor: pointer;

  font-weight: 700;

  border: 2px solid ${(props) => props.theme.colors.blue};
  cursor: pointer;

  color: ${(props) => props.theme.colors.blue};
  background-color: ${(props) => props.theme.greyscale.offWhite};

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.darkBlue};
    color: ${(props) => props.theme.colors.darkBlue};
  }
  &:focus {
    border: 2px solid ${(props) => props.theme.colors.lightBlue};
    color: ${(props) => props.theme.colors.blue};
  }
  &:disabled {
    border: 2px solid ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.blue};
    opacity: 0.5;
    cursor: "not-allowed";
  }
`;

export const TextButton = styled.button`
  cursor: pointer;
  border: none;
  box-sizing: border-box;

  font-weight: 700;

  color: ${(props) => props.theme.greyscale.label};
  background-color: transparent;

  &:active {
    color: ${(props) => props.theme.greyscale.titleActive};
  }
  &:hover {
    color: ${(props) => props.theme.greyscale.body};
  }
  &:disabled {
    color: ${(props) => props.theme.colors.body};
    opacity: 0.5;
    cursor: "not-allowed";
  }

  ${(props) => {
    if (props.active) {
      return css`
        color: ${(props) => props.theme.greyscale.titleActive};
      `;
    }
  }}
`;

export const MediumTextButton = styled(TextButton)`
  width: 105px;
  height: 40px;

  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const SmallTextButton = styled(TextButton)`
  width: 90px;
  height: 40px;

  font-size: ${(props) => props.theme.fontSizes.extraSmall};

  svg {
    margin-right: 7.33px;
  }
`;
