import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
`;

export const Indicator = styled.button`
  ${({ theme: { text, greyscale } }) => css`
    ${text.small}
    color: ${greyscale.label};
    background: ${greyscale.background};
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    svg {
      position: static;
      margin-left: 8px;
      opacity: 0.5;
    }
    :hover {
      color: ${greyscale.body};
      svg {
        opacity: 1;
      }
    }
  `}
`;

export const Panel = styled.div<{
  visible: boolean;
  direction: "left" | "right";
}>`
  ${({ theme: { text, greyscale }, visible, direction }) => css`
    background: ${greyscale.line};
    border: 1px solid ${greyscale.line};
    display: ${visible ? "flex" : "none"};
    flex-direction: column;
    width: 240px;
    position: absolute;
    top: 48px;
    ${direction === "left" ? "left : 0" : "right: 0"};
    border-radius: 16px;
    overflow: hidden;
    z-index: 10;
    h3 {
      ${text.medium};
      color: ${greyscale.titleActive};
      background: ${greyscale.background};
      padding: 16px 16px 12px;
    }
    li {
      ${text.small};
      padding: 8px 16px;
      display: flex;
      align-items: center;
      color: ${greyscale.body};
      border-top: 1px solid ${greyscale.line};
      background: ${greyscale.offWhite};
      height: 44px;
      position: relative;
      cursor: pointer;
      svg {
        top: 12px;
        right: 17px;
      }
      :hover {
        color: ${greyscale.titleActive};
        background: ${greyscale.background};
      }
    }
    .select {
      color: ${greyscale.titleActive};
    }
  `}
`;
