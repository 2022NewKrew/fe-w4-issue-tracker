import { TextAreaProps, TextAreaStyleProps } from "@interface/components";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

const TextArea = ({ value, onChange, height }: TextAreaProps) => {
  return (
    <Wrapper height={height}>
      <textarea value={value} onChange={onChange} placeholder=" "></textarea>
      <label>코멘트를 입력하세요</label>
      <span />
      <button>파일 첨부하기</button>
    </Wrapper>
  );
};

export default TextArea;

const Wrapper = styled.div<TextAreaStyleProps>`
  ${({ theme: { text, greyscale, flexCenter }, height }) => css`
    background: ${greyscale.inputBackground};
    border-radius: 16px;
    padding: 10px;
    position: relative;
    width: 100%;
    height: ${`${height}px`};
    ${flexCenter}
    ${text.small};
    textarea {
      background: transparent;
      width: 100%;
      height: 60%;
      margin-bottom: 10px;
      padding: 34px 0 0 14px;
      :not(:placeholder-shown) + label {
        ${text.xsmall};
        color: ${greyscale.label};
      }
    }
    label {
      position: absolute;
      top: 16px;
      left: 24px;
      color: ${greyscale.placeholer};
      transform: translateY(0%);
      transition: all 0.3s ease;
      pointer-events: none;
    }
    span {
      position: absolute;
      left: 0;
      right: 0;
      top: 74%;
      bottom: 26%;
      border: 1px dashed ${greyscale.line};
    }
    button {
      ${text.xsmall};
      margin-top: 10px;
      color: ${greyscale.label};
      background: transparent;
      font-weight: bold;
      flex: 1;
      ${flexCenter}
      align-items: flex-start;
      width: 100%;
    }

    :focus-within {
      background: ${greyscale.offWhite};
      border: 1px solid ${greyscale.titleActive};
      span {
        border-color: ${greyscale.titleActive};
      }
    }
  `}
`;
