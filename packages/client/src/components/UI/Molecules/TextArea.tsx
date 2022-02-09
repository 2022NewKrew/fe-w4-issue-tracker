import styled from "@emotion/styled";
import Atoms from "@UI/Atoms";

import { v4 } from "uuid";

interface Props extends SProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ value, onChange, height, width }: Props) => {
  const uuid = v4();
  return (
    <SInputWrapper width={width} height={height} className="TextArea">
      <textarea
        id={uuid}
        value={value}
        onChange={onChange}
        placeholder=" "
      ></textarea>
      <Atoms.Placeholder
        id={uuid}
        label="코멘트를 입력하세요"
        size="large"
        typing={value !== ""}
      />
      <Atoms.Button shape="text" icon="paperclip" size="small">
        파일 첨부하기
      </Atoms.Button>
    </SInputWrapper>
  );
};

export default TextArea;

interface SProps {
  width: number;
  height: number;
}

const SInputWrapper = styled(Atoms.InputWrapper)<SProps>`
  border-radius: 16px;
  width: ${({ width }) => width + "px"};
  height: ${({ height }) => height + "px"};
  padding: 10px;
  & > textarea {
    ${({ theme }) => theme.FontSize.small};
    background: transparent;
    width: 100%;
    height: calc(100% - 52px);
    padding: 6px 14px;
    margin-bottom: auto;
    :not(:placeholder-shown) {
      padding-top: 24px;
    }
  }
  & > .Button {
    position: absolute;
    left: 0;
    bottom: 0;
    padding-left: 24px;
    width: 100%;
    height: 52px;
    ${({ theme }) => theme.FontSize.xsmall};
    border-top: 1px dashed var(--line);
    justify-content: flex-start;
  }
`;
