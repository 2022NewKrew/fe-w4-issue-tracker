import { TextAreaStyle } from "@styles/textArea";

interface Props {
  value: string;
  onChange: (e: any) => void;
}

const TextArea = ({ value, onChange }: Props) => {
  return (
    <div css={TextAreaStyle}>
      <textarea value={value} onChange={onChange} placeholder=" "></textarea>
      <label>코멘트를 입력하세요</label>
      <span />
      <button>파일 첨부하기</button>
    </div>
  );
};

export default TextArea;
