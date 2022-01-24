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

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  padding: 0 24px;
  border: none;
  cursor: pointer;

  font-weight: 700;

  font-size: ${(props) => props.theme.fontSizes.medium};

  color: ${(props) => props.theme.greyscale.offWhite};

  ${(props) => {
    const mainColor = props.color;
    const [INIT, LIGHT, DARK] = findColor(props.theme, mainColor);

    return css`
      background-color: ${INIT};

      &:hover {
        background-color: ${DARK};
      }
      &:focus {
        background-color: ${INIT};
        border: 4px solid ${LIGHT};
      }
      &:disabled {
        cursor: "not-allowed";
        background-color: ${INIT};
        opacity: 0.5;
      }
    `;
  }}
`;

export const LargeButton = styled(Button)`
  width: 340px;
  height: 64px;
`;

export const MediumButton = styled(Button)`
  width: 240px;
  height: 56px;
`;

export const SmallButton = styled(Button)`
  width: 120px;
  height: 40px;
  border-radius: 11px;

  font-size: ${(props) => props.theme.fontSizes.extraSmall};
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
`;

export const MediumTextButton = styled(TextButton)`
  width: 100px;
  height: 40px;
  padding: 0 24px;

  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const SmallTextButton = styled(TextButton)`
  width: 90px;
  height: 40px;

  font-size: ${(props) => props.theme.fontSizes.extraSmall};
`;
