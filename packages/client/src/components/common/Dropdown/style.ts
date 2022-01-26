import styled from "@emotion/styled";
import theme from "@styles/theme";

export const Wrapper = styled.div`
  position: relative;
`;

export const Indicator = styled.button`
  ${theme.text.small}
  font-weight: bold;
  color: ${theme.greyscale.label};
  background: ${theme.greyscale.background};
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
    color: ${theme.greyscale.body};
    svg {
      opacity: 1;
    }
  }
`;

export const Panel = styled.div<{
  visible: boolean;
  direction: "left" | "right";
}>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  width: 240px;
  position: absolute;
  top: 48px;
  ${({ direction }) => (direction === "left" ? "left : 0;" : "right: 0;")}
  background: ${theme.greyscale.line};
  border: 1px solid ${theme.greyscale.line};
  border-radius: 16px;
  overflow: hidden;
  z-index: 10;
  h3,
  li {
    padding: 8px 16px;
  }
  h3 {
    ${theme.text.medium};
    color: ${theme.greyscale.titleActive};
    background: ${theme.greyscale.background};
  }
  li {
    ${theme.text.small};
    display: flex;
    align-items: center;
    color: ${theme.greyscale.body};
    border-top: 1px solid ${theme.greyscale.line};
    background: ${theme.greyscale.offWhite};
    height: 44px;
    position: relative;
    cursor: pointer;
    svg {
      top: 12px;
      right: 17px;
    }
    :hover {
      color: ${theme.greyscale.titleActive};
      background: ${theme.greyscale.background};
    }
  }
  .select {
    color: ${theme.greyscale.titleActive};
  }
`;
