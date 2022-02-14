/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useRef } from 'react';
import { jsx, css } from '@emotion/react';
import { theme } from '@styles/theme';
import Icon from '@icon';
import { TextareaStatus } from '@/types';

interface TextareaProps {
  placeholder: string;
  width: number;
  onFileUpload: (file: File) => void;
}

const Textarea = ({ placeholder, width, onFileUpload }: TextareaProps) => {
  const [status, setStatus] = useState<TextareaStatus>(TextareaStatus.Initial);
  const fileRef: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const handleFocus = () => setStatus(TextareaStatus.Typing);
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (value === '') setStatus(TextareaStatus.Initial);
    else setStatus(TextareaStatus.Filled);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) onFileUpload(event.target.files[0]);
  };

  const handleClickUpload = () => {
    if (fileRef.current !== null) fileRef.current.click();
  };

  return (
    <div css={[WrapperStyle, StatusStyle[status], { width: `${width}px` }]}>
      <span>{placeholder}</span>
      <textarea placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur} />
      <a onClick={handleClickUpload}>
        <input ref={fileRef} type="file" onChange={handleFileChange} />
        <Icon icon="PaperClip" size="16" css={{ 'margin-right': '8px' }} />
        파일 첨부하기
      </a>
    </div>
  );
};

const { placeHolder, inputBackground, line, label, offWhite, titleActive } = theme.greyScale;
const { textSmall, linkXSmall, textXSmall } = theme.textStyles;

const WrapperStyle = css`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  box-sizing: border-box;

  & > span {
    ${textXSmall}
    color: ${label};
    margin: 16px 24px -8px;
    height: 20px;
  }

  & > textarea {
    height: 99px;
    padding: 6px 14px;
    margin: 10px;
    box-sizing: border-box;

    background: none;
    outline: none;
    border: none;
    ${textSmall}
    ::placeholder {
      color: ${placeHolder};
    }
  }

  & > a {
    display: flex;
    padding: 16px 24px;
    height: 52px;
    box-sizing: border-box;
    color: ${label};
    ${linkXSmall}
    border-top: 1px dashed ${line};
    &:hover {
      cursor: pointer;
    }
  }

  & > a > input {
    overflow: hidden;
    position: absolute;
    width: 1rem;
    height: 1rem;
    margin: -1rem;
    padding: 0;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }
`;

const Initial = css`
  background: ${inputBackground};
  border: none;

  & > span {
    display: none;
  }

  & > textarea {
    height: 128px;
  }
`;

const Filled = css`
  background: ${inputBackground};
  border: none;

  & > span {
    margin: 17px 25px -8px;
  }

  & > textarea {
    padding: 6px 15px;
  }
`;

const Typing = css`
  background: ${offWhite};
  border: 1px solid ${titleActive};

  & > a {
    border-top: 1px dashed ${titleActive};
    padding: 16px 23px 15px;
    height: 51px;
  }
`;

const StatusStyle = {
  Initial,
  Typing,
  Filled,
};

export default Textarea;
